const inquirer = require("inquirer");
const mysql = require('mysql2');
require("console.table");
const { type } = require("os");

// Connect to SQL database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Bellingham@123!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`),
  startApp()
);

//Start Menu 
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
            quit();
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

// Add Department
function addDepartment() {

  inquirer.prompt({
    type: "input",
    message: "Please enter the name of the department",
    name: "deptName"

  }).then(function(res){

    db.query("INSERT INTO department (name) VALUES (?)", [res.deptName], function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
  });
}

// Add Role
function addRole() {

  inquirer.prompt([
  {
    type: "input",
    message: "Please enter the name of the role.",
    name: "roleName"
  },
  {
    type: "input",
    message: "Please enter the salary for the role.",
    name: "roleSalary"
  },
  {
    type: "input",
    message: "Please enter the department ID for the role.",
    name: "roleDeptID"
  }
  ]).then(function(res){

    db.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [res.roleName, res.roleSalary, res.roleDeptID], function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
  });
}

// Add Employee
function addEmployee() {

  inquirer.prompt([
  {
    type: "input",
    message: "Please enter the first name of the emplpoyee.",
    name: "empFirstName"
  },
  {
    type: "input",
    message: "Please enter the last name of the employee.",
    name: "empLastName"
  },
  {
    type: "input",
    message: "Please enter the role ID for the employee.",
    name: "empRoleID"
  },
  {
    type: "input",
    message: "Please enter the manager ID for the employee.",
    name: "empManagerID"
  }
  ]).then(function(res){

    db.query("INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?,?,?,?)", [res.empFirstName, res.empLastName, res.empManagerID, res.empRoleID], function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
  });
}

// Update Employee Role
function updateEmployee() {

  inquirer.prompt([
  {
    type: "input",
    message: "Please enter the ID of the employee to update.",
    name: "empID"
  },
  {
    type: "input",
    message: "Please enter the new role ID for the employee.",
    name: "newRoleID"
  }
  ]).then(function(res){

    db.query("UPDATE employee SET role_id = ? WHERE id = ?", [res.newRoleID, res.empID], function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
  });
}

// Exit 
function quit() {
    process.exit();
}