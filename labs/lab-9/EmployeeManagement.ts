import EmployeeController from "./EmployeeControler";
const readline = require('readline-sync');

// EmployeeController.inputEmployees();
let employees = EmployeeController.inputEmployees();
let totalSalary = EmployeeController.getTotalSalary(employees);
let highestSalaryEmployee = EmployeeController.findHighestSalary(employees);
let lowestSalaryEmployee = EmployeeController.findLowestSalary(employees);

// Print the total salary, highest and lowest salary employees
console.log(`\n \t Total salary of all employees: ${totalSalary} $`);
console.log(`\t Employee with the highest salary: ${highestSalaryEmployee.name} (${highestSalaryEmployee.salary}$) and is a ${highestSalaryEmployee.getType()}`);
console.log(`\t Employee with the lowest salary: ${lowestSalaryEmployee.name} (${lowestSalaryEmployee.salary}$) and is a ${lowestSalaryEmployee.getType()}`);

// DESC Sort employees by salary 
let sortedBySalary = EmployeeController.sortBySalaryASC(employees,false);
console.log(`Employees sorted by salary (descending):\n`);
sortedBySalary.forEach(employee => console.log(`\t ${employee.name} (${employee.salary}$) is a ${employee.getType()}`));
// Sort employees by name 
let sortedByName = EmployeeController.sortByName(employees);
console.log(`Employees sorted by name (ascending):\n`);
sortedByName.forEach(employee => console.log(`\t ${employee.name} (${employee.salary}$) is a ${employee.getType()}`));

