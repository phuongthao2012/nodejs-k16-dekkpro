import Employee from "./Employee";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";
const readline = require('readline-sync');

export default class EmployeeController {
    public static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary: number = 0;
        for (const employee of employeeList) {
            totalSalary = totalSalary + employee.salary;
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
            let employee = new FullTimeEmployee(name, salary);
            employee.setSalary(salary);
            employees.push(employee);
        }
        console.log(`Enter 2 contract employees: \n`);
        for (let i = 0; i < 2; i++) {
            let name = readline.question(`Enter contract employees name: `);
            let salary = Number(readline.question(`Enter contract employees salary: `));
            let employee = new ContractEmployee(name, salary);
            employee.setSalary(salary);
            employees.push(employee);
        }
        return employees;

    }

    // Find employee with the highest salary
    public static findHighestSalary(employees: Employee[]): Employee {
        return employees.reduce((highest, employee) => (employee.salary > highest.salary ? employee : highest));

    }

    // Find employee with the lowest salary
    public static findLowestSalary(employees: Employee[]): Employee {
        return employees.reduce((lowest, employee) => (employee.salary < lowest.salary ? employee : lowest));


    }
    // Sort employees by salary in asc order
    public static sortBySalary(employees: Employee[]): Employee[] {

        return employees.sort((a, b) => b.salary - a.salary);
    }

    // Sort employees by name in alphabetical order
    public static sortByName(employees: Employee[]): Employee[] {
        return employees.sort((a, b) => a.name.localeCompare(b.name));
    }
}



