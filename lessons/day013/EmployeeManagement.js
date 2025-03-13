"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create data
/* const Employee = require('./Employee');
const SalaryControler = require('./SalaryControler'); */
var Employee_1 = require("./Employee");
var SalaryControler_1 = require("./SalaryControler");
var teo = new Employee_1.Employee("Teo", 1000);
var ti = new Employee_1.Employee("Ti", 2000);
// init controler
var salaryControler = new SalaryControler_1.SalaryControler();
// get the evaluated result
var totalSalary = salaryControler.getTotalSalary([teo, ti]);
console.log(totalSalary);
//iterable when input an object not an array
// mismatching btw desired parameter and argument
