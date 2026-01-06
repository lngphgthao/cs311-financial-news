from llama_index.core import SimpleDirectoryReader, Document, VectorStoreIndex, StorageContext, ChatPromptTemplate
from llama_index.core.node_parser import SentenceSplitter, TokenTextSplitter, SentenceWindowNodeParser, SemanticSplitterNodeParser
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.vector_stores.pinecone import PineconeVectorStore
from llama_index.core import Settings

from llama_index.llms.huggingface import HuggingFaceLLM
from llama_index.core.storage.docstore import SimpleDocumentStore

import os
from pinecone import Pinecone

import json

from dotenv import load_dotenv
load_dotenv()

import nest_asyncio

nest_asyncio.apply()

print("Initialize Pinecone and models...")
print("\n")

pc = Pinecone(api_key=os.environ["PINECONE_API_KEY"])
embedding_model = HuggingFaceEmbedding(model_name="BAAI/bge-m3")

Settings.embed_model = embedding_model

print("Finish initializing Pinecone and models...")
print("\n")

print("Loading articles from JSON...")
print("\n")

json_path = r"C:\Users\USER\Documents\Chatbot\cs311-financial-news\solutions\vnnewscrawler\news\vnexpress_kinhdoanh.json"
with open(json_path, 'r', encoding='utf-8') as f:
    articles = json.load(f)

documents = []
for article in articles:
    doc = Document(
        text=article.get("content", ""),
        metadata={
            "title": article.get("title", ""),
            "date": article.get("date", ""),
            "author": article.get("author", ""),
            "url": article.get("url", "")
        }
    )

    documents.append(doc)
    
print(f"Loaded {len(documents)} articles.")
print("\n")

splitter = SentenceSplitter(
    chunk_size=900,
    chunk_overlap=180
)

nodes = splitter.get_nodes_from_documents(documents)

print(f"Created {len(nodes)} chunks")
print("\n")
print("Splitted documents prepared for indexing.")
print("\n")

import re
def clean_text(text):
    text = re.sub(r'\d+\.\s*', '', text)  
    text = re.sub(r'-', ' ', text)
    text = re.sub(r'"', ' ', text)
    text = text.replace('\n', ' ').strip()
    text = re.sub(r'\s+', ' ', text) 
    text = re.sub(r'\bkeywords: ', '', text)
    text = text.strip()
    return text

for node in nodes:
    node.text = clean_text(node.text)
    
splitted_docs = [Document(text=node.text, metadata=node.metadata) for node in nodes]

docstore = SimpleDocumentStore()
docstore.add_documents(splitted_docs)
storage_context = StorageContext.from_defaults(
    docstore=docstore
)

index = VectorStoreIndex(splitted_docs, storage_context=storage_context)

index.storage_context.persist("database/")

pinecone_index = pc.Index(name="fin", host="https://tuankodepzai-ap6o33y.svc.aped-4627-b74a.pinecone.io")
storage_context_pinecone = StorageContext.from_defaults(
    vector_store=PineconeVectorStore(pinecone_index)
)
index = VectorStoreIndex.from_documents(splitted_docs, show_progress=True, storage_context=storage_context_pinecone, embed_model= embedding_model)

print("Indexing completed and stored in Pinecone.")
print("\n")