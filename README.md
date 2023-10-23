# Object-Relational-Mapping-ORM-Challenge-E-commerce-Back-End
E-Commerce Back End with Express.js and Sequelize
Table of Contents
Introduction
User Story
Acceptance Criteria
Technologies Used
Installation and Usage
Database Configuration
Database Initialization and Seeding
Server Startup
API Routes
Issues and Support
License
Introduction
This is the back end of an e-commerce website built with Express.js and Sequelize. It provides the essential server and API functionality required to manage products, categories, and tags. This README will guide you through the setup, usage, and features of this back end.

User Story
As a manager at an internet retail company, I want a back end for my e-commerce website that utilizes the latest technologies so that my company can compete effectively with other e-commerce companies.

Acceptance Criteria
Functional Express.js API:

Given a functional Express.js API.
Database Configuration:

When I add my database name, MySQL username, and MySQL password to an environment variable file,
Then I am able to connect to a database using Sequelize.
Database Initialization and Seeding:

When I enter schema and seed commands,
Then a development database is created and is seeded with test data.
Server Startup:

When I enter the command to invoke the application,
Then my server is started and the Sequelize models are synced to the MySQL database.
API GET Routes:

When I open API GET routes in Insomnia Core for categories, products, or tags,
Then the data for each of these routes is displayed in a formatted JSON.
API POST, PUT, and DELETE Routes:

When I test API POST, PUT, and DELETE routes in Insomnia Core,
Then I am able to successfully create, update, and delete data in my database.
Technologies Used
Express.js: A web application framework for building the server and API routes.
Sequelize: An ORM for database interaction, enabling seamless communication with a MySQL database.
MySQL: The database management system used for data storage.
Node.js: The runtime environment for executing server-side JavaScript.
Insomnia Core: An API testing tool for testing API routes.
Environment Variables: Used to securely store sensitive database connection details.
Installation and Usage
To set up and run the project, follow these steps:

Clone the Repository: Clone this repository to your local machine.

bash
Copy code

Environment Variables:

Create an environment variable file (.env) in the project root directory.

Provide the necessary database details in the .env file:

env
Copy code
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
Install Dependencies: Install project dependencies using npm.

bash
Copy code
npm install
Database Initialization and Seeding:

Initialize the database schema and seed data with the appropriate commands.

bash
Copy code
npm run schema
npm run seed
Start the Server:

Start the server with the following command:

bash
Copy code
npm start
API Routes Testing:

Use Insomnia Core or any API testing tool to test the API routes.
Database Configuration
The .env file is used to securely store sensitive database connection details. Be sure to enter the correct database name, MySQL username, and MySQL password in this file.

Database Initialization and Seeding
The database schema can be initialized by running the following command:

bash
Copy code
npm run schema
This command sets up the database structure. To populate the database with initial data, run the seeding command:

bash
Copy code
npm run seed
This will add test data to your development database.

Server Startup
Start the server with the following command:

bash
Copy code
npm start
The server will start, and Sequelize models will be synced to the MySQL database. Ensure that your environment variables are correctly configured before starting the server.

API Routes
You can use Insomnia Core or your preferred API testing tool to interact with the API routes. The available routes include:

GET routes for retrieving data related to categories, products, and tags.
POST, PUT, and DELETE routes for creating, updating, and deleting data in the database.
Issues and Support
If you encounter any issues or require support, please refer to the project's documentation or reach out to the project maintainers.

License
This project is licensed under the MIT License.