# Expense_Tracker_API
 REST API for Expense Tracking using NodeJS MongoDB and Express

introduction

Welcome to the Expense  Tracker API Back-End project! providing a seamless experience for tracking expenses. perform CURD operation This project utilizes Node.js, Express.js, MongoDB, RESTful API endpoints. 

Technologies used

Node.js: The project is powered by Node.js, a powerful JavaScript runtime known for its scalability and performance. Node.js enables efficient server-side development.

Express.js: As a minimal and flexible Node.js web application framework, Express.js simplifies the development of robust and scalable APIs, making it an excellent choice for this back-end project.

MongoDB: A NoSQL database, MongoDB is used for storing and managing data efficiently. Its flexibility allows for easy adaptation to changing requirements.

REST API: The project follows the principles of Representational State Transfer (REST), providing a standardized and scalable architecture for building APIs.

Deployment

 This deployment allows users to interact with the system and test its features using tools like POSTMAN API.

How to test

1.Open this project in visual studio 
2.npm install and install dependence 
3.Open postman api after enter the url localhost:3000/api/expenses then perform CURD opretion.
4.Open mongodb and put the mongosh command on mongodb terminal and copy this  "mongodb://127.0.0.1:27017/own database name" url us per mongodb version and paste in index.js and create our own database and name it.After run this command on vs terminal npm start and get a message on termial is a "mongodb connected ".
5.back to the mongodb terminal and put the given below command :
    1.use dbs
    2.show dbs  (show the database)
    3.show collection 
    4.db.collection name.find({}) (example-  db.expenses.find({}) ) 
6.mongodb and postmanapi they are run together.
7.perform CURD opretion on postman app and they show in mongodb 



Conclusion

The Expense Tracker Api Back-End project is a leveraging powerful technologies to create a scalable, secure, and efficient system. Whether you are a developer looking to understand the architecture or a user exploring financial management solutions,
