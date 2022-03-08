INSERT INTO department (name)
VALUES ("Management"),
       ("Sales"),
       ("Accounting"),
       ("Quality"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Branch Manager", 100000, 1),
       ("Salesman", 50000, 2),
       ("Accountant", 55000, 3),
       ("Quality Assurance Director", 55000, 4),
       ("Human Resources Representitive", 60000, 5);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Michael", "Scott", NULL, 1),
       ("Jim", "Halpert", 1, 2),
       ("Dwight", "Schrute", 1, 2),
       ("Stanley", "Hudson", 1, 2),
       ("Phyllis", "Vance", 1, 2),
       ("Andy", "Bernard", 1, 2),
       ("Kevin", "Malone", 1, 3),
       ("Angela", "Martin", 1, 3),
       ("Oscar", "Martinez", 1, 3),
       ("Creed", "Bratton", 1, 4),
       ("Toby", "Flenderson", 1, 5);
