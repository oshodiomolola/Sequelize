NodeJS Assignment
Migrations, Seeders and Authentication

Context
Using the context from the previous assignment, Company X wants us to start creating our codebase using our ERD design to setup migrations, seeders and authentication with JWT.


What you need to do:
Using a clean repo, have two branches, one for SQL implementation and another for NOSQL implementation

Using Sequelize, 
create the necessary migrations. 
seed a user for the admin role and 10 or more items into your database
create a route for a user to signup, login and view the list of items

Using Mongoose, 
create the necessary schemas and models. 
Seed an admin user and 10 or more items into your database
Create a route for a user to signup, login and view the list of items



Things to Note:

In both implementations, the route to get the list of items must be authenticated
Use JWT for authentication
Ensure your JWT expires after 1 hour
Add a .env.example file
Ensure password is encrypted
