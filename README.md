# Bayer API

This repository contains the backend API for the Bayer project. It is built using Node.js, Express, and MongoDB, and provides endpoints for managing various resources such as users, products, and orders.

---

## **Folder Structure**
```
bayer.api/
├── controllers/ # Logic for handling API requests
│ ├── Event.controller.js # Event-related operations
│ └── User.controller.js # User-related operations
├── database/ # Configuration file for database connection
│ └── db.js # MongoDB connection setup
├── middlewares/ # Custom middleware functions
│ └── authMiddleware.js # Authentication middleware
├── models/ # MongoDB models (schemas)
│ ├── Event.model.js # Event schema
│ ├── Patient.model.js # Patient schema
│ ├── Provider.model.js # Provider schema
│ └── User.model.js # Product schema
├── routes/ # API routes
│ ├── Event.route.js # Routes for event operations
│ └── User.route.js # Routes for user operations
├── .env # Environment variables
├── .gitignore # Files and folders to ignore in Git
├── package.json # Project dependencies and scripts
├── server.js # Entry point for the application
└── README.md # Project documentation (this file)
```


---

## **API Endpoints**


Feature	API Endpoint
User Registration	POST /user/signup
User Login	POST /user/login
Create Service	POST /user/service/create
Create Event	POST /user/event/create
Get User Details	GET /user/details
Get Event Data	GET /event

### **1. User Routes**
| **Endpoint**            | **Method** | **Description**                          |
|--------------------------|------------|------------------------------------------|
| `/user/signup`           | POST       | Register a new user                      |
| `/user/login`            | POST       | Login a user                             |
| `/user/service/create`   | POST       | Create Service                           |
| `/user/event/create`     | POST       | Create Event                             |
| `/user/details`          | GET        | Get User Details, based on user type (from the token) this will return either Patient details like Goal, disease objects or Services in case user is a Provider                         |
| `/user/event`            | GET        | Get Event Data for that user             |

---
## **Libraries Used**
### **1. bcrypt (v5.1.1)**
  - Purpose: Used for hashing user passwords securely.
  - Key Features:
    - Salt generation and password hashing.
    - Protects against brute-force attacks.

### **2. cors (v2.8.5)**
  - Purpose: Enables Cross-Origin Resource Sharing (CORS) for the API.
  - Key Features:
    - Allows requests from different domains.
    - Configurable to restrict or allow specific origins.

### **3. dotenv (v16.4.7)**
  - Purpose: Loads environment variables from a .env file.
  - Key Features:
    - Simplifies configuration management.
    - Keeps sensitive data (e.g., API keys) out of the codebase.

### **4. express (v4.21.2)**
  - Purpose: A web framework for building the API.
  - Key Features:
    - Simplifies routing and middleware management.
    - Lightweight and fast.

### **5. jsonwebtoken (v9.0.2)**
  - Purpose: Used for generating and verifying JSON Web Tokens (JWT) for authentication.
  - Key Features:
    - Securely transmits user information.
    - Supports token expiration and signing.

### **6. mongoose (v8.11.0)**
  - Purpose: An ODM (Object Data Modeling) library for MongoDB.
  - Key Features:
    - Simplifies database interactions.
    - Provides schema validation and middleware.

## **Setup Instructions**

### **1. Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or cloud-based)
- Postman (for testing APIs)

### **2. Installation**
1. Clone the repository:
   ```
   git clone https://github.com/koushikmondal413/bayer.api.git
   cd bayer.api
2. Install dependencies:
   ```
   npm install
   
3. Create a .env file in the root directory and add the following environment variables:
   ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/bayer
    JWT_SECRET=your_jwt_secret
4. Start the server:
   ```
    npm run server

## **Future Scope**
**Add Joi Validation:** Implement schema validation using Joi to ensure data integrity and prevent invalid inputs.

**Integrate Testing Framework:** Use testing frameworks like Jest or Mocha to write unit and integration tests for the API.

**Implement Caching:** Use Redis or in-memory caching to improve API performance for frequently accessed data.

**Add Rate Limiting:** Implement rate limiting to prevent abuse of the API and ensure fair usage.

**Enhance Security:** Add features like HTTPS, CSRF protection, and input sanitization to improve security.

**Support for WebSockets:** Integrate WebSockets for real-time communication (e.g., notifications or live updates).

**Add Swagger Documentation:** Automatically generate API documentation using Swagger for better developer experience.

**Implement Logging:** Use libraries like Datadog to add logging for debugging and monitoring.

**Support for File Uploads:** Add functionality to handle file uploads (e.g., images, documents) using Multer.

**Containerization:** Dockerize the application for easier deployment and scalability.

**Add Pagination:** Implement pagination for endpoints that return large datasets (e.g., products, orders).

**Multi-language Support:** Add support for multiple languages using i18n for error messages and responses.

**Microservice Architecture:** Break down the API into domain-specific microservices and add an API Gateway, such as Apigee, to route the requests to the microservices. The database can also be broken down to have separate databases for each microservice.
