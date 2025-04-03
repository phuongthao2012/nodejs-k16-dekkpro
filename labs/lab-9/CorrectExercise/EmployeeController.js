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
var SortRuleTypes_1 = require("./SortRuleTypes");
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.prototype.getTotalSalary = function (empList) {
        var totalSalary = 0;
        for (var _i = 0, empList_1 = empList; _i < empList_1.length; _i++) {
            var emp = empList_1[_i];
            totalSalary += emp.getSalary();
        }
        return totalSalary;
    };
    EmployeeController.prototype.sortByName = function (empList, rule) {
        var copied = __spreadArray([], empList, true);
        if (rule === SortRuleTypes_1.ASC) {
            return copied.sort(function (a, b) { return a.getName().localeCompare(b.getName()); });
        }
        else if (rule === SortRuleTypes_1.DESC) {
            return copied.sort(function (a, b) { return b.getName().localeCompare(a.getName()); });
        }
        else {
            this.printInvalidRule();
            return copied;
        }
    };
    EmployeeController.prototype.sortBySalary = function (empList, rule) {
        var copied = __spreadArray([], empList, true);
        if (rule === SortRuleTypes_1.ASC) {
            return copied.sort(function (a, b) { return a.getSalary() - b.getSalary(); });
        }
        else if (rule === SortRuleTypes_1.DESC) {
            return copied.sort(function (a, b) { return b.getSalary() - a.getSalary(); });
        }
        else {
            this.printInvalidRule();
            return copied;
        }
    };
    EmployeeController.prototype.printInvalidRule = function () {
        console.error("Invalid rule");
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
