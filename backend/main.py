from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from transformers import pipeline
import uuid
from datetime import datetime
import langid
import Translator

password = "mohit18"
database_name = "samaya"

connection_string = f"mongodb+srv://mohitshaw181104:{password}@samaya.kuoxwni.mongodb.net/{database_name}?retryWrites=true&w=majority"

client = MongoClient(connection_string)
SamayaDB = client['Samaya']
department_name_emails = SamayaDB.dept_name_emails
complaints_data = SamayaDB.user_complaints_data
existing_record = department_name_emails.find_one({})

classifier = pipeline("zero-shot-classification")

def generate_complaint_uid():
  return str(uuid.uuid4())

def detect_language(text):
    lang, _ = langid.classify(text)
    return lang
def translate_to_english(text, source_lang):
    translator = Translator(to_lang='en', from_lang=source_lang)
    translation = translator.translate(text)
    return translation
def predict_department(complaint: str):
   text_to_translate = complaint
   detected_language = detect_language(text_to_translate)
   translated_text = translate_to_english(text_to_translate, detected_language)
   department_names = list(existing_record.keys())
   department_names = department_names[1:]
   result = classifier (
       translated_text,
       candidate_labels=department_names,
       multi_class=True,
       temperature = 0.8
   )
   print("-------------",result)

   return result['labels'][0]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def data():
    all_entries_cursor = complaints_data.find({})
    all_entries_list = list(all_entries_cursor)
    return all_entries_list

@app.get("/api")
def read_root():
    # print(data())
    return data()

@app.post("/api")
def create_item(data: dict):
    print(data)
    complaint = data['msg']
    predicted_department = predict_department(complaint)
    dept_email = existing_record[predicted_department]
    
    code_for_departments = {
        "Transport Department": 'tra',
        "Education and Learning Department": 'edu',
        "Health & Wellness Department": 'hea',
        "Environment Department": 'env',
        "Finance Department": 'fin',
        "Agriculture Department": 'agr',
        "Housing and Urban Development": 'hou',
        "Banking and Insurance Department": 'ban',
        "Water Department": 'wat',
        "Electricity Department": 'ele',
        "Fire Department": 'fir'
    }

    dept_code = code_for_departments[predicted_department]

    random_id = generate_complaint_uid()
    id_code = dept_code + '/' + random_id[3:23]
    formatted_datetime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    
    record = {
        '_id' : id_code,
        'complaint' : complaint,
        "department_name" : predicted_department,
        "department_email" : dept_email,
        "Date Time" : formatted_datetime
    }
    # print("*********************",data)
    entry = complaints_data.insert_one(record)
    print(data)
    return {"message":"we recieved", "user data":data}

