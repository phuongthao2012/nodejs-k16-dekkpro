"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create data
/* const Employee = require('./Employee');
const SalaryControler = require('./SalaryControler'); */
var Employee_js_1 = require("./Employee.js");
var SalaryControler_js_1 = require("./SalaryControler.js");
var teo = new Employee_js_1.default("Teo", 1000);
var ti = new Employee_js_1.default("Ti", 2000);
// init controler
var salaryControler = new SalaryControler_js_1.default();
// get the evaluated result
var totalSalary = salaryControler.getTotalSalary([teo, ti]);
console.log(totalSalary);
