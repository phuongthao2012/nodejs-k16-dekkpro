"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeControler_1 = require("./EmployeeControler");
var readline = require('readline-sync');
// EmployeeController.inputEmployees();
var employees = EmployeeControler_1.default.inputEmployees();
var totalSalary = EmployeeControler_1.default.getTotalSalary(employees);
var highestSalaryEmployee = EmployeeControler_1.default.findHighestSalary(employees);
var lowestSalaryEmployee = EmployeeControler_1.default.findLowestSalary(employees);
// Print the total salary, highest and lowest salary employees
console.log("\n \t Total salary of all employees: ".concat(totalSalary, " $"));
console.log("\t Employee with the highest salary: ".concat(highestSalaryEmployee.getName(), " (").concat(highestSalaryEmployee.getSalary(), "$) and is a ").concat(highestSalaryEmployee.getType()));
console.log("\t Employee with the lowest salary: ".concat(lowestSalaryEmployee.getName(), " (").concat(lowestSalaryEmployee.getSalary(), "$) and is a ").concat(lowestSalaryEmployee.getType()));
// DESC Sort employees by salary 
var sortedBySalary = EmployeeControler_1.default.sortBySalaryASC(employees, false);
console.log("Employees sorted by salary (descending):\n");
sortedBySalary.forEach(function (employee) { return console.log("\t ".concat(employee.getName(), " (").concat(employee.getSalary(), "$) is a ").concat(employee.getType())); });
// Sort employees by name 
var sortedByName = EmployeeControler_1.default.sortByName(employees);
console.log("Employees sorted by name (ascending):\n");
sortedByName.forEach(function (employee) { return console.log("\t ".concat(employee.getName(), " (").concat(employee.getSalary(), "$) is a ").concat(employee.getType())); });
