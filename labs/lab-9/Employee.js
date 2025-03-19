"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
        this.maxSalary = this.setMaxSalary();
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getMaxSalary = function () {
        return this.maxSalary;
    };
    return Employee;
}());
exports.default = Employee;
