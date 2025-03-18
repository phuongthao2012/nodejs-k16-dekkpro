import Contractor from "./Contractor";
import EmployeeController from "./EmployeeControler";
import FTE from "./FTE";
import PartTimeEmployee from "./PartTimeEmployee";

const teo = new FTE();
const ti = new Contractor();
const tun = new PartTimeEmployee();
// call set salary tu lop cha Employee, do lop cha dang set getSalary la protected, lop con muon ke thua thi phai override va public de co the access tu ben ngoai
tun.setsalary(15*1000);
const totalSalary = EmployeeController.getTotalSalary([teo, ti, tun]);
console.log(totalSalary);
// IS -A Relationship
// Immutable object