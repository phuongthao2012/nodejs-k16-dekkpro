"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    /*     get name() {
            return this.name;
        }
        set name(name) {
            this.name = name;
        } */
    Employee.prototype.getsalary = function () {
        return this.salary;
    };
    Employee.prototype.setsalary = function (salary) {
        this.salary = salary;
    };
    return Employee;
}());
exports.default = Employee;
/* export{Employee}
module.exports = Employee; */
