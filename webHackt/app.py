# save this as app.py
from flask import Flask, jsonify, render_template, request, redirect, session, url_for
import requests
import token
from bardapi import Bard
import os
import time
app = Flask(__name__)

@app.route("/")
def hello():
    print("121221")
    return render_template('chatbot.html')


os.environ['_BARD_API_KEY'] = 'cwiBJhvayANo2rjmgcCGlwyte8xj-jVAN12vrNuts6SH6S4VRarabVFhnximP_M9P-sBlQ.'
token='cwiBJhvayANo2rjmgcCGlwyte8xj-jVAN12vrNuts6SH6S4VRarabVFhnximP_M9P-sBlQ.'
#cwgsaSFmgGEvIXxMXyKjvYCEXPcf04Y6FuEKI1pmt0fbyHQFj5woC3JbrIpwv9hWquaDAg.
#cwiBJhvayANo2rjmgcCGlwyte8xj-jVAN12vrNuts6SH6S4VRarabVFhnximP_M9P-sBlQ.
session = requests.Session()
session.headers = {
            "Host": "bard.google.com",
            "X-Same-Domain": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Origin": "https://bard.google.com",
            "Referer": "https://bard.google.com/",
        }
session.cookies.set("__Secure-1PSID", os.getenv("_BARD_API_KEY")) 
# session.cookies.set("__Secure-1PSID", token) 

bard = Bard(token=token, session=session, timeout=50)
#print(bard.get_answer("In this session if the topic i am asking question for is related to the topic of online frauds such as phising pharming etc.. reply within 2 line else if it not related only reply with 'out of subject'")['content'])

@app.route('/get_data', methods=[ 'POST'])
def get_data():
    word = request.form.get('query')
    word="Answer the following question if related to ONLINE FRAUDS in less than 20 words, here is the Question= "+word+" if question not related to online fraud print 'QUESTION NOT RELATED TO ONLINE FRAUDS'. If question is related then give the final answer in less than 20 words."
    #print(bard.get_answer("In this session only answer question related to online frauds and if not related then do not answer and reply with 'Out of Subject'")['content'])

    print(word)
    data=bard.get_answer(word)['content']
    ##to remove
    ## ##data="*8000*"
    data=data.replace("*", "")
    print(data)
    ## ##data="mmm"
   ## ## time.sleep(10)

    return jsonify(data)

if __name__ == '__main__':
   app.run(debug = True)