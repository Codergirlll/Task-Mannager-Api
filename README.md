# Task-Mannager-Api

Assignment: Node Js Development – Task Manager
Objective:
Develop a REST API using Node.js and Express.js with MySQL as the database to manage tasks. The API should support user authentication and allow each user to perform CRUD operations on their own tasks.

Project Requirements:
1. Authentication & User Management
Implement user registration and login using JWT-based authentication.
Store user credentials securely (use bcrypt for password hashing).
Only authenticated users can access the task manager.
2. Task Management (CRUD Operations)
Each user can Create, Read, Update, and Delete their own tasks.
Tasks should include the following attributes: 
id (Auto-incremented Primary Key)
title (String, required)
description (String, optional)
status (Enum: pending, in-progress, completed, default: pending)
dueDate (Date, required)
userId (Foreign Key – Linked to the authenticated user)
Users cannot access or modify tasks created by other users.
3. Project Structure & Best Practices
Follow a proper project structure with separate folders for controllers, routes, models, and middleware.
Use environment variables (.env) for database credentials and secret keys.
Implement middleware for authentication and error handling.
4. Error Handling & Validation
Proper error handling for invalid requests, authentication failures, and database errors.
Validate input data before processing requests (use express-validator or similar libraries).
Return meaningful HTTP status codes (400, 401, 404, 500, etc.).
5. API Documentation
Document the API endpoints using Swagger (OpenAPI Specification) or provide a Postman Collection.
Include details such as request parameters, response formats, authentication requirements, and example responses.

Bonus (Optional for Extra Credit):
Implement Pagination for fetching tasks.
Allow Task Filtering by status (pending, in-progress, completed).
Enable Task Reminders (e.g., Notify users if a task is nearing its due date).

Deliverables:
GitHub Repository with well-structured code and README instructions.
Postman Collection / Swagger API Documentation.
Deployment instructions (if deployed on a cloud platform like Heroku, Vercel, or AWS).
