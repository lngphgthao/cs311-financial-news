from llama_index.core import (
    SimpleDirectoryReader, 
    Document, 
    VectorStoreIndex, 
    StorageContext,  
    ChatPromptTemplate,
    PromptTemplate, Settings
)
from llama_index.core.node_parser import ( 
    SentenceSplitter, 
    TokenTextSplitter,
    SentenceWindowNodeParser, 
    SemanticSplitterNodeParser )

from llama_index.readers.json import JSONReader
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.vector_stores.pinecone import PineconeVectorStore
from llama_index.core.query_engine import TransformQueryEngine
from llama_index.core.storage.docstore import SimpleDocumentStore
from llama_index.core.retrievers import QueryFusionRetriever
from llama_index.retrievers.bm25 import BM25Retriever
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.core.response.pprint_utils import pprint_response
from llama_index.core.response.notebook_utils import display_source_node

import pinecone
import os
from pinecone import Pinecone

reader = JSONReader()
pc = Pinecone(api_key = os.environ["PINECONE_API_KEY"])
embedding_model = HuggingFaceEmbedding(model_name="BAAI/bge-m3")

documents = reader.load_data(input_file="<Input File>", extra_info={})