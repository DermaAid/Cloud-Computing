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
{
    "message": "User Successfully Created"
}
