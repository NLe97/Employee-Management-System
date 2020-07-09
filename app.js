const mysql = require("mysql");
const inquirer = require("inquirer");
const { inherits } = require("util");
const logo = require("asciiart-logo");



// connection 
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "2411",
    database: "employeeinfo_db"
});

connection.connect(function (err) {
    if (err) throw err;
    
});

//function afterConnection() {
  //  connection.query("SELECT * FROM products", function(err, res) {
    //    if (err) throw err;
      //  console.log(res);
        //console.table(res);
        //connection.end();

    //});

//}
connection.connect();

searchDB();

function searchDB() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role",
                "Exit"
            ]

        }).then((response) => {
            switch (response.action) {
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                default :
                    exitApp();
                    break;
            }
        })
}

function exitApp() {
        console.log("Exiting Application!");
        process.exit();
}


function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        searchDB();
    })
    
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        searchDB();
    })
    
}

function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        searchDB();``
    })
    
}

function addDepartment() {
    inquirer.prompt([{
        name: "department",
        type: "input",
        message: "Add a New Department: "
    }])
        .then((res) => {
            connection.query(`INSERT INTO department(department_name) VALUES ("${res.department}")`, (err, res) => {
                if (err) throw err;
                searchDB();
            }
        );
    });
}


function addRole() {
    connection.query(`SELECT * FROM department`, (err, res) => {
        if (err) throw err;
        const departmentList = department.map(d => {
            return {
                name: d.department_name,
                value: d.id
            }
        })
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of this new role?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of this role?"
            },
            {
                type: "list",
                name: "department",
                message: "What department would you like to add this to?",
                choices: departmentList
            }
        ]).then((department) => {
            connection.query(`INSERT INTO role(title, salary, department_id) VALUES ("${res.title}", "(${res.salary})", "(${res.department}" )`, (err, res) => {
                if (err) throw err;
                searchDB();
            })
            console.log("Role has been added!");
        })


    })
