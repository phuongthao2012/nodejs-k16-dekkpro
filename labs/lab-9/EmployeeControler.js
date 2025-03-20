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
