"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
            totalSalary = totalSalary + employee.getSalary();
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
            // While salary exceeds the max allowed, input again
            var employee = new FullTimeEmployee_1.default(name_1, 0);
            console.log(employee.getMaxSalary());
            while (salary > employee.getMaxSalary()) {
                console.log("\t ".concat(salary, "'s salary exceeds the max limit of ").concat(employee.getMaxSalary(), "."));
                salary = Number(readline.question("Please enter a valid salary for ".concat(employee.getName(), " (up to ").concat(employee.getMaxSalary(), "):")));
            }
            employee.setSalary(salary);
            employees.push(employee);
        }
        console.log("Enter 2 contract employees: \n");
        for (var i = 0; i < 2; i++) {
            var name_2 = readline.question("Enter contract employees name: ");
            var salary = Number(readline.question("Enter contract employees salary: "));
            var employee = new ContractEmployee_1.default(name_2, 0);
            while (salary > employee.getMaxSalary()) {
                console.log("\t ".concat(salary, "'s salary exceeds the max limit of ").concat(employee.getMaxSalary(), "."));
                salary = Number(readline.question("Please enter a valid salary for ".concat(employee.getName(), " (up to ").concat(employee.getMaxSalary(), "):")));
            }
            employee.setSalary(salary);
            employees.push(employee);
        }
        return employees;
    };
    // sort by salary defauult is ascending
    EmployeeController.sortBySalaryASC = function (employees, ascending) {
        if (ascending === void 0) { ascending = false; }
        // return a copied version of the employees array, avoid changing the original array
        return __spreadArray([], employees, true).sort(function (a, b) { return ascending ? a.getSalary() - b.getSalary() : b.getSalary() - a.getSalary(); });
    };
    // Salary descending sort
    EmployeeController.findHighestSalary = function (employees) {
        // take the first employee after sort by desc
        return this.sortBySalaryASC(employees, false)[0];
    };
    // Salary ascending sort
    EmployeeController.findLowestSalary = function (employees) {
        // take the first employee after sort by asc
        return this.sortBySalaryASC(employees, true)[0];
    };
    EmployeeController.sortByName = function (employees) {
        return __spreadArray([], employees, true).sort(function (a, b) { return a.getName().localeCompare(b.getName()); });
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
