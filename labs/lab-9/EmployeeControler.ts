import Employee from "./Employee";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";
const readline = require('readline-sync');

export default class EmployeeController {
    public static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary: number = 0;
        for (const employee of employeeList) {
            totalSalary = totalSalary + employee.getSalary();
        }
        return totalSalary;
    }

    public static inputEmployees(): Employee[] {

        // input an array of employee that contains many employee type
        let employees: Employee[] = [];

        console.log(`Enter 3 full time employees: \n`);
        for (let i = 0; i < 3; i++) {
            let name = readline.question(`Enter full time employee name: `);
            let salary = Number(readline.question(`Enter full time employee salary: `));
            // While salary exceeds the max allowed, input again
            let employee = new FullTimeEmployee(name, 0);
            // console.log(employee.getMaxSalary());          
            
            while (salary > employee.getMaxSalary()) {
                console.log(`\t ${salary}'s salary exceeds the max limit of ${employee.getMaxSalary()}.`);
                salary = Number(readline.question(`Please enter a valid salary for ${employee.getName()} (up to ${employee.getMaxSalary()}):`));
            }
            employee.setSalary(salary);
            employees.push(employee);
        }
        console.log(`Enter 2 contract employees: \n`);
        for (let i = 0; i < 2; i++) {
            let name = readline.question(`Enter contract employees name: `);
            let salary = Number(readline.question(`Enter contract employees salary: `));
            let employee = new ContractEmployee(name, 0);
            while (salary > employee.getMaxSalary()) {
                console.log(`\t ${salary}'s salary exceeds the max limit of ${employee.getMaxSalary()}.`);
                salary = Number(readline.question(`Please enter a valid salary for ${employee.getName()} (up to ${employee.getMaxSalary()}):`));
            }
            
            employee.setSalary(salary);
            employees.push(employee);
        }
        return employees;

    }
    // sort by salary defauult is ascending
    public static sortBySalaryASC(employees: Employee[], ascending: boolean = false): Employee[] {
        // return a copied version of the employees array, avoid changing the original array
        return [...employees].sort((a, b) => ascending ? a.getSalary() - b.getSalary() : b.getSalary() - a.getSalary());
    }
    // Salary descending sort
    public static findHighestSalary(employees: Employee[]): Employee {
        // take the first employee after sort by desc
        return this.sortBySalaryASC(employees, false)[0];
    }
    // Salary ascending sort
    public static findLowestSalary(employees: Employee[]): Employee {
        // take the first employee after sort by asc
        return this.sortBySalaryASC(employees, true)[0];
    }
    public static sortByName(employees: Employee[]): Employee[] {
        return [...employees].sort((a, b) => a.getName().localeCompare(b.getName()));
    }

}



