import EmployeeController from "./EmployeeControler";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";
import Employee from "./Employee";
const readline = require('readline-sync');
main();
function main() {
    let employees = inputEmployees();
    let totalSalary = EmployeeController.getTotalSalary(employees);
    let highestSalaryEmployee = EmployeeController.findHighestSalary(employees);
    let lowestSalaryEmployee = EmployeeController.findLowestSalary(employees);
    
    console.log(`\n \t Total salary of all employees: ${totalSalary} $`);
    console.log(`\t Employee with the highest salary: ${highestSalaryEmployee.getName()} (${highestSalaryEmployee.getSalary()}$) and is a ${highestSalaryEmployee.getType()}`);
    console.log(`\t Employee with the lowest salary: ${lowestSalaryEmployee.getName()} (${lowestSalaryEmployee.getSalary()}$) and is a ${lowestSalaryEmployee.getType()}`);
    
    // Sort employees by salary (descending)
    let sortedBySalary = EmployeeController.sortBySalaryASC(employees, false);
    console.log(`Employees sorted by salary (descending):\n`);
    sortedBySalary.forEach(employee => console.log(`\t ${employee.getName()} (${employee.getSalary()}$) is a ${employee.getType()}`));
    
    // Sort employees by name
    let sortedByName = EmployeeController.sortByName(employees);
    console.log(`Employees sorted by name (ascending):\n`);
    sortedByName.forEach(employee => console.log(`\t ${employee.getName()} (${employee.getSalary()}$) is a ${employee.getType()}`));
}

function inputEmployees(): Employee[] {
    let employees: Employee[] = [];

    console.log(`Enter 3 full-time employees: \n`);
    for (let i = 0; i < 3; i++) {
        let name = readline.question(`Enter full-time employee name: `);
        let salary = Number(readline.question(`Enter full-time employee salary: `));

        let employee = new FullTimeEmployee(name, 0);
        while (salary > employee.getMaxSalary()) {
            console.log(`\t ${salary} exceeds the max limit of ${employee.getMaxSalary()}.`);
            salary = Number(readline.question(`Please enter a valid salary for ${employee.getName()} (up to ${employee.getMaxSalary()}):`));
        }
        employee.setSalary(salary);
        employees.push(employee);
    }

    console.log(`Enter 2 contract employees: \n`);
    for (let i = 0; i < 2; i++) {
        let name = readline.question(`Enter contract employee name: `);
        let salary = Number(readline.question(`Enter contract employee salary: `));

        let employee = new ContractEmployee(name, 0);
        while (salary > employee.getMaxSalary()) {
            console.log(`\t ${salary} exceeds the max limit of ${employee.getMaxSalary()}.`);
            salary = Number(readline.question(`Please enter a valid salary for ${employee.getName()} (up to ${employee.getMaxSalary()}):`));
        }
        employee.setSalary(salary);
        employees.push(employee);
    }

    return employees;
}



