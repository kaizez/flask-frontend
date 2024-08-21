
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/project')
def project():
    return render_template('projects.html')

@app.route('/ctf')
def ctf():
    return render_template('ctf.html')

@app.route('/flag')
def flag():
    path = "flag.txt"
    with open(path, 'r') as file:
        content = file.read()
    return render_template('flag.html',content=content)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
    