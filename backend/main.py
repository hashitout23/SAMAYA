from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
# import time
import pymongo
from transformers import pipeline
import uuid
from datetime import datetime

password = "mohit18"
database_name = "samaya"

connection_string = f"mongodb+srv://mohitshaw181104:{password}@samaya.kuoxwni.mongodb.net/{database_name}?retryWrites=true&w=majority"

client = MongoClient(connection_string)
SamayaDB = client['Samaya']
department_name_emails = SamayaDB.dept_name_emails
complaints_data = SamayaDB.user_complaints_data
existing_record = department_name_emails.find_one({})

def generate_complaint_uid():
  return str(uuid.uuid4())

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

all_entries_cursor = complaints_data.find({})
all_entries_list = list(all_entries_cursor)

@app.get("/api")
def read_root():
    return all_entries_list

@app.post("/api")
def create_item(data: dict):

    classifier = pipeline("zero-shot-classification")
    complaint = data['msg']
    labels = list(existing_records.key())
    labels = labels[1:]
    
    result = classifier (
        complaint,
        candidate_labels=labels,
        multi_class=True,
        temperature = 0.8
    )
            
    predicted_department = result['labels'][0]
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
    
    record = {
        '_id' : id_code,
        'complaint' : complaint,
        "department_name" : predicted_department,
        "department_email" : dept_email,
        "Date Time" : formatted_datetime
    }
    
    entry = complaints_data.insert_one(record)

    final = entry
    return final


# while True:
    #     new_entries_cursor = complaints_data.find({'processed': {'$exists': False}})

    #     for entry in new_entries_cursor:
    #         complaint_text = entry["complaint"]
    #         labels = list(existing_records.keys())
    #         labels = labels[1:]

    #         result = classifier(
    #             complaint_text,
    #             candidate_labels=labels,
    #             multi_class=True,
    #             temperature = 0.8
    #         )
            
    #         predicted_department = result['labels'][0]
    #         dept_email = existing_record[predicted_department]

    #         complaints_data.update_one(
    #             {'_id': entry['_id']},
    #             {'$set': {'processed': True, 'predicted_department': result['labels'][0], 'predicted_email': dept_email}}
    #         )

    #     time.sleep(60)

