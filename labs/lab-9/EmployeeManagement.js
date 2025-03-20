"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeControler_1 = require("./EmployeeControler");
var ContractEmployee_1 = require("./ContractEmployee");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
var readline = require('readline-sync');
main();
function main() {
    var employees = inputEmployees();
    var totalSalary = EmployeeControler_1.default.getTotalSalary(employees);
    var highestSalaryEmployee = EmployeeControler_1.default.findHighestSalary(employees);
    var lowestSalaryEmployee = EmployeeControler_1.default.findLowestSalary(employees);
    console.log("\n \t Total salary of all employees: ".concat(totalSalary, " $"));
    console.log("\t Employee with the highest salary: ".concat(highestSalaryEmployee.getName(), " (").concat(highestSalaryEmployee.getSalary(), "$) and is a ").concat(highestSalaryEmployee.getType()));
    console.log("\t Employee with the lowest salary: ".concat(lowestSalaryEmployee.getName(), " (").concat(lowestSalaryEmployee.getSalary(), "$) and is a ").concat(lowestSalaryEmployee.getType()));
    // Sort employees by salary (descending)
    var sortedBySalary = EmployeeControler_1.default.sortBySalaryASC(employees, false);
    console.log("Employees sorted by salary (descending):\n");
    sortedBySalary.forEach(function (employee) { return console.log("\t ".concat(employee.getName(), " (").concat(employee.getSalary(), "$) is a ").concat(employee.getType())); });
    // Sort employees by name
    var sortedByName = EmployeeControler_1.default.sortByName(employees);
    console.log("Employees sorted by name (ascending):\n");
    sortedByName.forEach(function (employee) { return console.log("\t ".concat(employee.getName(), " (").concat(employee.getSalary(), "$) is a ").concat(employee.getType())); });
}
function inputEmployees() {
    var employees = [];
    console.log("Enter 3 full-time employees: \n");
    for (var i = 0; i < 3; i++) {
        var name_1 = readline.question("Enter full-time employee name: ");
        var salary = Number(readline.question("Enter full-time employee salary: "));
        var employee = new FullTimeEmployee_1.default(name_1, 0);
        while (salary > employee.getMaxSalary()) {
            console.log("\t ".concat(salary, " exceeds the max limit of ").concat(employee.getMaxSalary(), "."));
            salary = Number(readline.question("Please enter a valid salary for ".concat(employee.getName(), " (up to ").concat(employee.getMaxSalary(), "):")));
        }
        employee.setSalary(salary);
        employees.push(employee);
    }
    console.log("Enter 2 contract employees: \n");
    for (var i = 0; i < 2; i++) {
        var name_2 = readline.question("Enter contract employee name: ");
        var salary = Number(readline.question("Enter contract employee salary: "));
        var employee = new ContractEmployee_1.default(name_2, 0);
        while (salary > employee.getMaxSalary()) {
            console.log("\t ".concat(salary, " exceeds the max limit of ").concat(employee.getMaxSalary(), "."));
            salary = Number(readline.question("Please enter a valid salary for ".concat(employee.getName(), " (up to ").concat(employee.getMaxSalary(), "):")));
        }
        employee.setSalary(salary);
        employees.push(employee);
    }
    return employees;
}
