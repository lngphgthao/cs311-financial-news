import json
import os
import asyncio
import nest_asyncio
import time
from flask import Flask, request, jsonify, g, render_template
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()
nest_asyncio.apply()

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

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get("message", "")
    
    backend_response = f"You asked: {user_message}"
    
    response = {"response": backend_response}
    return jsonify(response)

def start():
    app.run(host='0.0.0.0', port=5000)
    
if __name__ == '__main__':
    start()