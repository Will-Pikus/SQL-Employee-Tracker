-- Show all from department table
SELECT * FROM department;

-- Show all from role table
SELECT * FROM role;

-- Show all from employee table
SELECT * FROM employee;

-- View employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department_name, role.salary as salaries, employee.manager_id
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id;
