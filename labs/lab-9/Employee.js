"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline-sync');
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.setSalary = function (salary) {
        // While salary exceeds the max allowed, input again
        while (salary > this.maxSalary()) {
            console.log("\t ".concat(this.name, "'s salary exceeds the max limit of ").concat(this.maxSalary(), "."));
            salary = Number(readline.question("Please enter a valid salary for ".concat(this.name, " (up to ").concat(this.maxSalary(), "):")));
        }
        this.salary = salary;
    };
    return Employee;
}());
exports.default = Employee;
