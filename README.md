# SQL-Employee-Tracker

### Description
Application is an employee tracker that allows the user to manage employees through sql database. Application is started by running node index.js. The terminal will then bring up a menu with the following options: view departments, roles, employees, add department role, employee, and update employee. Select an option to be taken through prompts to execute its function. When you are done using the app select quit to return to the console. 

### Dev Notes
before running the index.js, schema.sql and seeds.sql must be run in mysql, in abforementioned order. index.js uses inquirer to provide the user prompts and calls functions based on user selection. Functions are used to write literal sql statements to view, add, and update the database.

Query.sql has no functional purpose in the application, just used for testing. 

### Walkthrough Video

https://www.youtube.com/watch?v=Swtp9PRVspw&ab_channel=WillPikus