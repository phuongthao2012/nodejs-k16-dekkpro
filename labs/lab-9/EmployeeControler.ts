import Employee from "./Employee";

export default class EmployeeController {
    public static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary: number = 0;
        for (const employee of employeeList) {
            totalSalary = totalSalary + employee.getSalary();
        }
        return totalSalary;
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



