const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require("console.table");

// const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Bellingham@123!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`),
  startApp()
);

//What the user will first see once logged into node
function startApp() {
    inquirer
      .prompt({
        type: "list",
        message: "What would you like to do?",
        name: "options",
        choices: [
          "View departments",
          "View roles",
          "View employees",
          "Add department",
          "Add role",
          "Add employee",
          "Update employee role",
          "Quit"
        ]
      })
      .then(function(result) {
        console.log("You selected " + result.options);
  
        switch (result.options) {
          case "View departments":
            viewDepartment();
            break;
          case "View roles":
            viewRoles();
            break;
          case "View employees":
            viewEmployees();
            break;
          case "Add department":
            addDepartment();
            break;
          case "Add role":
            addRole();
            break;
          case "Add employee":
            addEmployee();
            break;
          case "Update employee role":
            updateEmployee();
            break;
          default:
            // quit();
        }
    });
}


// View everything from department table
function viewDepartment() {
    const sql = "SELECT * FROM department";
    db.query(sql, function(err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
    });
}

// View everything from role table
function viewRoles() {
    const sql = "SELECT * FROM role";
    db.query(sql, function(err, res) {
        if (err) throw err;
        console.table(res);
    startApp();
    });
}

// View employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
    const sql = "SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department_name, role.salary as salaries, employee.manager_id FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id";
    db.query(sql, function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
}

// Exit 
function quit() {
    connection.end();
    process.exit();
}