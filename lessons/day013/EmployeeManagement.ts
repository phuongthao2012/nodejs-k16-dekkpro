// create data
/* const Employee = require('./Employee');
const SalaryControler = require('./SalaryControler'); */
import Employee from './Employee.js';
import SalaryControler from './SalaryControler.js';
let teo = new Employee("Teo", 1000);
let ti = new Employee("Ti", 2000);
// init controler
let salaryControler = new SalaryControler();
// get the evaluated result
const totalSalary = salaryControler.getTotalSalary([teo,ti]);
console.log(totalSalary);