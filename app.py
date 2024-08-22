
from flask import Flask, render_template, url_for
import os

app = Flask(__name__)

@app.route('/' , methods=['POST', 'GET'])
def index():
    return render_template('index.html')

@app.route('/project', methods=['POST', 'GET'])
def project():
    return render_template('projects.html')

@app.route('/ctf', methods=['POST', 'GET'])
def ctf():
    return render_template('ctf.html')

@app.route('/flag',methods=['POST', 'GET'])
def flag():
    path = "flag.txt"
    with open(path, 'r') as file:
        content = file.read()
    return render_template('flag.html',content=content)

if __name__ == "__main__":
   port = int(os.environ.get('PORT', 88))
   app.run(debug=True, host='0.0.0.0', port=port)
    