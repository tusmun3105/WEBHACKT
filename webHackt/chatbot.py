import token
from bardapi import Bard
import os
import requests
os.environ['_BARD_API_KEY'] = 'cwgsaSFmgGEvIXxMXyKjvYCEXPcf04Y6FuEKI1pmt0fbyHQFj5woC3JbrIpwv9hWquaDAg.'
token='cwgsaSFmgGEvIXxMXyKjvYCEXPcf04Y6FuEKI1pmt0fbyHQFj5woC3JbrIpwv9hWquaDAg.'

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


# Continued conversation without set new session
print(bard.get_answer("In this session only answer question related to online frauds and if not related then say out of subject")['content'])
print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
print(bard.get_answer("What is pythagoras theorem")['content'])