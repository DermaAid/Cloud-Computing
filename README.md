# **DermaAid Cloud-Computing**

This repository contains the code for the **DermaAid-Cloud-Computing** project.  
**DermaAid Documentation - Capstone Project - C242-PS440**

---

## **Base URL**

- **Development**: `http://localhost:3000`
- **Production**: *(Tentukan URL hosting produksi jika sudah diterapkan, misalnya GCP atau Heroku)*

---

## **API Documentation**

### **Authentication and User Management**

#### 1. **Signup**

**Endpoint**:  
`POST /api/auth/signup`

**Description**:  
Register a new user.

**Request Body**:  
```json
{
    "fullName": "string",
    "email": "string",
    "mobileNumber": "string",
    "password": "string",
    "dob": "yyyy-mm-dd"
}
Response (status code: 201):

json
Copy code
{
    "message": "User Successfully Created"
}
2. Login
Endpoint:
POST /api/auth/login

Description:
Authenticate user and generate a token.

Request Body:

json
Copy code
{
    "email": "string",
    "password": "string"
}
Response (status code: 200):

json
Copy code
{
    "message": "Login Successfully",
    "data": {
        "fullName": "string",
        "email": "string",
        "userId": "string"
    },
    "token": "<jwt-token>"
}
3. Forgot Password
Endpoint:
POST /api/auth/forgot-password

Description:
Request a password reset.

Request Body:

json
Copy code
{
    "email": "string"
}
Response (status code: 200):

json
Copy code
{
    "message": "Password reset link sent to email."
}
User Data
1. Get User Details
Endpoint:
GET /api/users/:userId

Description:
Retrieve user details by user ID.

Headers:

json
Copy code
{
    "Authorization": "Bearer <jwt-token>"
}
Response (status code: 200):

json
Copy code
{
    "fullName": "string",
    "email": "string",
    "dob": "yyyy-mm-dd",
    "mobileNumber": "string",
    "createdAt": "timestamp"
}
Diagnosis History
1. Add Diagnosis History
Endpoint:
POST /api/history

Description:
Add a diagnosis history record.

Headers:

json
Copy code
{
    "Authorization": "Bearer <jwt-token>"
}
Request Body:

json
Copy code
{
    "imageUrl": "string",
    "result": "string"
}
Response (status code: 201):

json
Copy code
{
    "message": "Diagnosis history added successfully."
}
2. Get Diagnosis Histories
Endpoint:
GET /api/history/:userId

Description:
Retrieve diagnosis histories for a specific user.

Headers:

json
Copy code
{
    "Authorization": "Bearer <jwt-token>"
}
Response (status code: 200):

json
Copy code
[
    {
        "historyId": "string",
        "imageUrl": "string",
        "result": "string",
        "createdAt": "timestamp"
    }
]
News
1. Get All News
Endpoint:
GET /api/news

Description:
Retrieve all news articles.

Response (status code: 200):

json
Copy code
[
    {
        "newsId": "string",
        "title": "string",
        "content": "string",
        "createdAt": "timestamp"
    }
]
2. Get News by ID
Endpoint:
GET /api/news/:newsId

Description:
Retrieve a news article by its ID.

Response (status code: 200):

json
Copy code
{
    "newsId": "string",
    "title": "string",
    "content": "string",
    "createdAt": "timestamp"
}
Chatbot
1. Ask Chatbot
Endpoint:
POST /api/chatbot

Description:
Interact with the chatbot.

Request Body:

json
Copy code
{
    "message": "string"
}
Response (status code: 200):

json
Copy code
{
    "response": "string"
}
