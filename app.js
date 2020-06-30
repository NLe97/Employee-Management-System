const mysql = require("mysql");
const inquirer = require("inquirer");




// connection 
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "2411",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;

});