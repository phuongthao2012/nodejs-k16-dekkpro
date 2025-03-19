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
    // sort by salary with ascending by default (true)
    EmployeeController.sortBySalary = function (employees, ascending) {
        if (ascending === void 0) { ascending = false; }
        // return a copied version of the employees array, avoid changing the original array
        return __spreadArray([], employees, true).sort(function (a, b) { return ascending ? a.salary - b.salary : b.salary - a.salary; });
    };
    // Salary descending sort
    EmployeeController.findHighestSalary = function (employees) {
        // take the first employee after sort by desc
        return this.sortBySalary(employees, false)[0];
    };
    // Salary ascending sort
    EmployeeController.findLowestSalary = function (employees) {
        // take the first employee after sort by asc
        return this.sortBySalary(employees, true)[0]; // First element after ascending sort
    };
    EmployeeController.sortByName = function (employees) {
        return __spreadArray([], employees, true).sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
