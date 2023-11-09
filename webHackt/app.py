# save this as app.py
from flask import Flask, jsonify, render_template


app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('quiz.html')

@app.route("/trial")
def trial():
    return render_template('trial.html')

if __name__ == '__main__':
   app.run(debug = True)