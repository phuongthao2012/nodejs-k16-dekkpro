"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contractor_1 = require("./Contractor");
var EmployeeControler_1 = require("./EmployeeControler");
var FTE_1 = require("./FTE");
var PartTimeEmployee_1 = require("./PartTimeEmployee");
var teo = new FTE_1.default();
var ti = new Contractor_1.default();
var tun = new PartTimeEmployee_1.default();
// call set salary tu lop cha Employee, do lop cha dang set getSalary la protected, lop con muon ke thua thi phai override va public de co the access tu ben ngoai
tun.setsalary(15 * 1000);
var totalSalary = EmployeeControler_1.default.getTotalSalary([teo, ti, tun]);
console.log(totalSalary);
// IS -A Relationship
// Immutable object
