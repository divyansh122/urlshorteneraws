Serverless URL Shortener
This project is a serverless URL shortener built using AWS services, including AWS Lambda, API Gateway, DynamoDB, and S3. It allows users to shorten long URLs and optionally set an expiration date for the shortened URLs.

Architecture Overview
The architecture is completely serverless and follows a microservices-based approach. Here are the main components involved:

Client Browser: The frontend hosted on AWS S3 interacts with the backend via API Gateway.
AWS API Gateway: Manages API requests and routes them to the appropriate AWS Lambda function.
AWS Lambda: Processes URL shortening requests, generates unique short IDs, and stores the mapping in DynamoDB.
AWS DynamoDB: A NoSQL database that stores the mapping of short URLs to original URLs and expiration dates.
S3 Bucket: Hosts the frontend of the application and enables interaction with the backend via API Gateway.
Features
URL Shortening: Users can shorten long URLs into a unique 6-character string.
Expiration Date: Users can set an expiration date for each shortened URL.
CORS Support: The application supports Cross-Origin Resource Sharing (CORS) to allow frontend and backend communication.
