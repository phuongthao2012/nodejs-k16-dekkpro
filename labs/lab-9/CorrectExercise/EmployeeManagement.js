"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constractor_1 = require("./Constractor");
var FTE_1 = require("./FTE");
var EmployeeController_1 = require("./EmployeeController");
var SortRuleTypes_1 = require("./SortRuleTypes");
var fteNumber = 3;
var contractorNumber = 2;
var fteEmployees = [];
var contractorEmployees = [];
for (var empIndex = 0; empIndex < fteNumber; empIndex++) {
    fteEmployees.push(new FTE_1.default("FTE_".concat(empIndex + 1)));
}
for (var empIndex = 0; empIndex < contractorNumber; empIndex++) {
    contractorEmployees.push(new Constractor_1.default("Contractor_".concat(empIndex + 1)));
}
var controller = new EmployeeController_1.default();
var empList = fteEmployees.concat(contractorEmployees);
var totalSalary = controller.getTotalSalary(empList);
console.log("Total salary: ".concat(totalSalary));
var sortedBynameASC = controller.sortByName(empList, SortRuleTypes_1.ASC);
var sortedBynameDESC = controller.sortByName(empList, SortRuleTypes_1.DESC);
console.log("sortedBynameASC: ".concat(JSON.stringify(sortedBynameASC)));
console.log("sortedBynameDESC: ".concat(JSON.stringify(sortedBynameDESC)));
