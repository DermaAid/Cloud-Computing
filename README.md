# DermaAid Cloud-Computing  
This repository contains the code for the **DermaAid-Cloud-Computing** project.  

## DermaAid Documentation - Capstone Project - C242-PS440  

### Base URL  
- **Development**: `http://localhost:3000`  
- **Production**: ``  

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
- **Status Code**: 200 OK
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
