# DermaAid Cloud-Computing  
This repository contains the code for the **DermaAid-Cloud-Computing** project.  

## DermaAid Documentation - Capstone Project - C242-PS440  

### Base URL  
- **Development**: `http://localhost:3000`  
- **Production**: `https://backend-457365178940.asia-southeast2.run.app`  

---

## API Documentation  

### Authentication and User Management  

#### 1. Signup  
- **Endpoint**: `POST /api/auth/signup`  
- **Description**: Register a new user.  
- **Request Body**:  
  ```json
  {
      "fullName": "string",
      "email": "string",
      "mobileNumber": "string",
      "password": "string",
      "dob": "YYYY-MM-DD"
  }
- **Response**: Status Code: 201 Created
  ```json
  {
      "message": "User Successfully Created"
  }

#### 2. Login  
- **Endpoint**: `POST /api/auth/login`  
- **Description**: Authenticate user and generate a token.  
- **Request Body**:  
  ```json
  {
      "email": "string",
      "password": "string",
  }
- **Response**: Status Code: 200 OK
  ```json
  {
    "message": "Login Successfully",
    "data": {
        "fullName": "string",
        "email": "string",
        "mobileNumber": "string",
        "dob": "YYYY-MM-DD"
    },
    "token": "<jwt-token>"
  }

#### 3. Forgot Password   
A. Request Password Reset
- **Endpoint**: `POST /api/auth/forgot-password`  
- **Description**: Send a password reset link to the user’s email.  
- **Request Body**:  
  ```json
  {
      "email": "string",
  }
- **Response**: Status Code: 200 OK
  ```json
  {
    "message": "Password reset link sent to email."
  }

B. Reset Password
- **Endpoint**: `PATCH /api/auth/reset-password`  
- **Request Body**:  
  ```json
  {
      "email": "string",
      "newPassword": "string"
  }
- **Response**: Status Code: 200 OK
  ```json
  {
    "message": "Password successfully reset."
  }

#### User Profile
#### 1. Get User Profile
- **Endpoint**: `GET /api/users/:userId`
- **Headers**: `Authorization: Bearer <jwt-token>`
- **Description**: Retrieve user details.  
- **Request Body**:  
  ```json
  {
    "fullName": "string",
    "email": "string",
    "mobileNumber": "string",
    "dob": "YYYY-MM-DD"
  }
- **Response**: Status Code: 200 OK
  ```json
  {
    "message": "Password successfully reset."
  }
#### 2. Update User Profile
- **Endpoint**: `PATCH /api/users/:userId`
- **Headers**: `Authorization: Bearer <jwt-token>`
- **Request Body**:
  ```json
  {
    "fullName": "string",
    "email": "string",
    "mobileNumber": "string",
    "dob": "YYYY-MM-DD"
  }
  
- **Response**: Status Code: 200 OK
  ```json
  {
    "message": "User profile updated successfully."
  }

#### News
#### 1. Get All News
- **Endpoint**: `GET /api/news`
- **Description**: Retrieve all news articles.  
- **Request Body**:  
- **Response**: Status Code: 200 OK
  ```json
  [
    {
        "newsId": "string",
        "title": "string",
        "content": "string",
        "createdAt": "timestamp"
    }
  ]
#### 2.Get News by ID
- **Endpoint**: `GET /api/news/:newsId`
- **Description**: Retrieve a specific news article by ID.
- **Response**: Status Code: 200 OK
  ```json
  {
    "newsId": "string",
    "title": "string",
    "content": "string",
    "createdAt": "timestamp"
  }

#### Chatbot
- **Interact with Chatbot**
- **Endpoint**: `POST /api/chatbot`
- **Description**: Send a message to the chatbot and receive a response.  
- **Request Body**:  
  ```json
  {
    "message": "string"
  }
- **Response**: Status Code: 200 OK
  ```json
  {
    "message": "string"
  }

#### Diagnosis History
#### 1. Add Diagnosis History
- **Endpoint**: `POST /api/history/diagnosis`
- **Headers**: `Authorization: Bearer <jwt-token>`
- **Request Body**:
  ```json
  {
    "image": "image_url",
    "result": "string"
  }
  
- **Response**: Status Code: 200 OK
  ```json
  {
    "message": "Diagnosis history added successfully."
  }

#### 2. Get All Diagnosis Histories
- **Endpoint**: `GET /api/history/diagnosis`
- **Headers**: `Authorization: Bearer <jwt-token>`
- **Response**: Status Code: 200 OK
  ```json
  [
    {
        "diagnosisId": "string",
        "image": "image_url",
        "result": "string",
        "createdAt": "timestamp"
    }
  ]
