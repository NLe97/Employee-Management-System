CREATE DATABASE employeeinfo_db

USE employeeinfo_db;

CREATE TABLE department (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(40) NOT NULL

);

CREATE TABLE role (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(40) NOT NULL,
        salary DECIMAL (12,2),
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(40) NOT NULL,
        last_name VARCHAR(40) NOT NULL,
        role_id INT NOT NULL,
        FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
        manager_id INT AUTO_INCREMENT PRIMARY KEYE,
        FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);