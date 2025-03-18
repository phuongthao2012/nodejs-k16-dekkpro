"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContractEmployee_1 = require("./ContractEmployee");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
var readline = require('readline-sync');
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.getTotalSalary = function (employeeList) {
        var totalSalary = 0;
        for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
            var employee = employeeList_1[_i];
            totalSalary = totalSalary + employee.salary;
        }
        return totalSalary;
    };
    EmployeeController.inputEmployees = function () {
        // input an array of employee that contains many employee type
        var employees = [];
        console.log("Enter 3 full time employees: \n");
        for (var i = 0; i < 3; i++) {
            var name_1 = readline.question("Enter full time employee name: ");
            var salary = Number(readline.question("Enter full time employee salary: "));
            var employee = new FullTimeEmployee_1.default(name_1, salary);
            employee.setSalary(salary);
            employees.push(employee);
        }
        console.log("Enter 2 contract employees: \n");
        for (var i = 0; i < 2; i++) {
            var name_2 = readline.question("Enter contract employees name: ");
            var salary = Number(readline.question("Enter contract employees salary: "));
            var employee = new ContractEmployee_1.default(name_2, salary);
            employee.setSalary(salary);
            employees.push(employee);
        }
        return employees;
    };
    // Find employee with the highest salary
    EmployeeController.findHighestSalary = function (employees) {
        return employees.reduce(function (highest, employee) { return (employee.salary > highest.salary ? employee : highest); });
    };
    // Find employee with the lowest salary
    EmployeeController.findLowestSalary = function (employees) {
        return employees.reduce(function (lowest, employee) { return (employee.salary < lowest.salary ? employee : lowest); });
    };
    // Sort employees by salary in asc order
    EmployeeController.sortBySalary = function (employees) {
        return employees.sort(function (a, b) { return b.salary - a.salary; });
    };
    // Sort employees by name in alphabetical order
    EmployeeController.sortByName = function (employees) {
        return employees.sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
