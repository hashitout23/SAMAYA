from pymongo import MongoClient

password = "mohit18"
database_name = "samaya"

connection_string = f"mongodb+srv://mohitshaw181104:{password}@samaya.kuoxwni.mongodb.net/{database_name}?retryWrites=true&w=majority"

client = MongoClient(connection_string)
SamayaDB = client['Samaya']
department_name_emails = SamayaDB.dept_name_emails

record = {
    "Transport Department": 'transport@gmail.com',
    "Education and Learning Department": 'educationandlearning@gmail.com',
    "Health & Wellness Department": 'healthandwellness@gmail.com',
    "Environment Department": 'environment@gmail.com', 
    "Finance Department": 'finance@gmail.com', 
    "Agriculture Department": 'agriculture@gmail.com', 
    "Housing and Urban Development": 'housingandurbandevelopment@gmail.com',
    "Banking and Insurance Department": 'bankingandinsurance@gmail.com',
    "Water Department": 'water@gmail.com',
    "Electricity Department": 'electricity@gmail.com',
    "Fire Department": 'fire@gmail.com'
}

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

existing_record = department_name_emails.find_one({})
# print("--", existing_record)

if existing_record:
    _id = existing_record['_id']
    for department, email in record.items():
        if department not in existing_record.keys():
            # Update the existing record
            query = {'_id':_id}
            update_data = {'$set': {department:email}}
            result_update = department_name_emails.update_one(query, update_data)
            
else:
    department_name_emails.insert_one(record)
    
existing_record = department_name_emails.find_one({})
# print("--", existing_record)

# department_name = input("Enter a name of your department: ")
# formatted_department_name = department_name.title()
# email = existing_record[formatted_department_name]

# print(email)

# dep_names = list(existing_record.keys())
# dep_names = dep_names[1:]
# print("dep_names-->", dep_names)

# Close the connection when you're done
client.close()
