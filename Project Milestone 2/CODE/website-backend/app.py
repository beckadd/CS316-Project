from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def main():
    return send_from_directory('../website-frontend/build', 'index.html')