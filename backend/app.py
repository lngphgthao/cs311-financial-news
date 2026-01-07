import json
import os
import nest_asyncio
import time
from flask import Flask, request, jsonify, g
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()
nest_asyncio.apply()

from llama_index.retrievers.bm25 import BM25Retriever
from llama_index.core.retrievers import QueryFusionRetriever
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.core import (
    StorageContext, 
    PromptTemplate, 
    Settings, 
    load_index_from_storage
)
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.vector_stores.pinecone import PineconeVectorStore
from llama_index.llms.groq import Groq
from pinecone import Pinecone
import cohere

import unicodedata
from rapidfuzz import fuzz

threshold = 80

def to_lower_case(text):
    text = text.lower()
    text = ''.join(c for c in unicodedata.normalize('NFD', text) if unicodedata.category(c) != 'Mn')
    return text

def classify_message(message):
    clean_text = to_lower_case(message)

    small_talk_keywords = [
        "xin chao", "hom nay", "khoe khong", "the nao", "cam thay", "noi chuyen", "vui ve", "tro chuyen",
        "toi ten la", "ten toi la", "toi o dau", "ban o dau", "co met khong", "ban nghi sao", "anh nghi sao",
        "cam on", "xin loi", "toi buon", "toi vui", "troi dep", "troi mua", "co bi khong", "co that khong",
        "co dung khong", "chao buoi sang", "chao buoi toi", "chao buoi trua",
    ]
    
    financial_keywords = [ 
        "gia vang", "ty gia", "chung khoan", "co phieu", "forex", "ngoai hoi",
        "tai chinh", "dau tu", "thi truong", "bat dong san", "quy dau tu",
        "tin tuc tai chinh", "tin tuc chung khoan", "thi truong chung khoan",
    ]
    
    small_talk_match = any(fuzz.partial_ratio(clean_text, kw) >= threshold for kw in small_talk_keywords)
    financial_match = any(fuzz.partial_ratio(clean_text, kw) >= threshold for kw in financial_keywords)
    
    return 1 if small_talk_match and not financial_match else 0

chat_prompt = """
You are a Vietnamese language expert. 

### Guidelines:
1. Response with Vietnamese
2. Only based on information about course information do not care about files information. 
3. Use natural and conversational Vietnamese suitable for the intended audience.
4. Avoid repetition and ensure each question addresses a distinct aspect of the context.
5. remove all special token
6. Short answer
7. Do not Hallucinate if you don't know the answer.
8. Do not repeat the question

let's think step by step

response the question based on context:
"""

example_query_prompt =  """
You are an AI assistant specialized in analyzing and summarizing financial news, market reports, and economic trends.
Your goals:
1. Summarize key information from the provided context clearly and accurately.
2. Analyze financial or market trends (e.g., stocks, currencies, companies, macroeconomy) based on available data.
3. If possible, provide short-term **predictions or insights** (e.g., likely to rise/fall/stay stable) — but make it clear that this is an **estimated analysis**, not investment advice.
4. If the question asks for forecasts, respond cautiously, using data-driven reasoning.
5. If no relevant information is found in the provided context, respond exactly with:"Xin lỗi, tôi không tìm thấy thông tin phù hợp trong dữ liệu hiện có."
6. Always respond in **natural, fluent Vietnamese**, using a **professional, objective, and concise** tone.
7. The answer must be **short, clear, and information-rich** — concise but still complete.

let's think step by step.

Use the following context to answer the question:
Context: {context_str}
Question: {query_str}

Answer:
"""

app = Flask(__name__)
CORS(app)

@app.before_request
def before_request():
    g.start = time.time()
    
@app.after_request
def after_request(response):
    diff = time.time() - g.start
    if ((response.response) and (200 <= response.status_code < 300)):
        print(f"[{request.method}] {request.path} executed in {diff:.4f} seconds")
    return response

pc = Pinecone(api_key=os.environ["PINECONE_API_KEY"]) 
embedding_model = HuggingFaceEmbedding(model_name="BAAI/bge-m3")
llm = Groq(model="groq/compound", api_key=os.environ.get("GROQ_API_KEY"))
co = cohere.Client(os.environ.get("COHERE_API_KEY"))
Settings.embed_model = embedding_model
Settings.llm = llm

storage_context = StorageContext.from_defaults(persist_dir=r"C:\Users\USER\Documents\Chatbot\cs311-financial-news\solutions\database")
index = load_index_from_storage(storage_context)

retriever = QueryFusionRetriever(
    [
        index.as_retriever(similarity_top_k=10),
        BM25Retriever.from_defaults(docstore=index.docstore, similarity_top_k=10)
    ],
    num_queries=1,
    use_async=True
)

query_engine = RetrieverQueryEngine(retriever=retriever)

example_query_prompt = PromptTemplate(example_query_prompt)
query_engine.update_prompts({"response_synthesizer:text_qa_template": example_query_prompt})


chat_engine = index.as_chat_engine(
    chat_mode="condense_plus_context",
    system_prompt=(chat_prompt),
    query_engine=query_engine,
    verbose=True,
    llm=llm,
    max_tokens=1000, 
)

def result_content(results):
    matches = results['matches']
    response_texts = []
    response_url = []
    for match in matches:
        node_content = json.loads(match['metadata']['_node_content'])
        match_text = node_content['text']
        url_text = node_content['url']
        response_texts.append(match_text)
        response_url.append(url_text)
    response = "\n".join(response_texts)
    print(response_url)
    return response, response_url
        
def get_embed(text):
    return embedding_model._embed(text)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get("message", "")
    
    pc_index = pc.Index(host="https://tuankodepzai-ap6o33y.svc.aped-4627-b74a.pinecone.io")
    emb_query = get_embed(query)
    small_talk = classify_message(query)
    
    if not small_talk:
        try:
            results = pc_index.query(vector=emb_query, top_k=10, include_metadata=True, namespace='__default__')
            res, urls = result_content(results)
            react_response = chat_engine.chat(res + "\nQuestion: " + query)
            chat_engine.reset()
            
            print("References URLs:", urls)
            return jsonify({
                "query": query,
                "response": react_response.response.split("user:")[0].strip(),
                "references": urls,
                "status": "success"
            })
        except Exception as e:
            return jsonify({
                "query": query,
                "response": "Xin lỗi, hiện tại tôi không thể trả lời câu hỏi này.",
                "references": [],
                "status": "error",
                "error": str(e)
            })
    else: 
        try:
            response = co.chat(
                model="command-r-plus-08-2024",  
                message=[{"role": "user", "content": query}],
            )
            cohere_response = response.message.content[0].text
            response = {
                "query": query,
                "response": cohere_response,
                "references": [],
                "status": "success"
            }
        except Exception as e:
            response = {
                "query": query,
                "response": "Xin lỗi, câu hỏi này tôi không thể trả lời.",
                "references": [],
                "status": "error",
                "error": str(e)
            }

        return jsonify(response)

def start():
    app.run(host='0.0.0.0', port=5000)
    
if __name__ == '__main__':
    start()