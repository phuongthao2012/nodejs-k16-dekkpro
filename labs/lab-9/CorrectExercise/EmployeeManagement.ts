
import Contractor from "./Constractor";
import FTE from "./FTE";
import Employee from "./Employee";
import EmployeeController from "./EmployeeController";
import { ASC, DESC } from "./SortRuleTypes";
const fteNumber = 3;
const contractorNumber = 2;
let fteEmployees: Employee[] = [];
let contractorEmployees: Employee[] = [];

for (let empIndex = 0; empIndex < fteNumber; empIndex++) {
    //dung concat cung duoc hoac noi chuoi bang ``
    fteEmployees.push(new FTE(`FTE_${empIndex + 1}`));
}

for (let empIndex = 0; empIndex < contractorNumber; empIndex++) {
    contractorEmployees.push(new Contractor(`Contractor_${empIndex + 1}`));
}

const controller = new EmployeeController();
const empList = fteEmployees.concat(contractorEmployees);

let totalSalary = controller.getTotalSalary(empList);
console.log(`Total salary: ${totalSalary}`);

const sortedBynameASC = controller.sortByName(empList, ASC);
const sortedBynameDESC = controller.sortByName(empList, DESC);
console.log(`sortedBynameASC: ${JSON.stringify(sortedBynameASC)}`);
console.log(`sortedBynameDESC: ${JSON.stringify(sortedBynameDESC)}`);