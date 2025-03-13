// create data
/* const Employee = require('./Employee');
const SalaryControler = require('./SalaryControler'); */
import {Employee} from './Employee';
import {SalaryControler} from './SalaryControler';
let teo = new Employee("Teo", 1000);
let ti = new Employee("Ti", 2000);
// init controler
let salaryControler = new SalaryControler();
// get the evaluated result
const totalSalary = salaryControler.getTotalSalary([teo,ti]);
console.log(totalSalary);

//iterable when input an object not an array
// mismatching btw desired parameter and argument