import Employee from "./Employee";
import { ASC,DESC } from "./SortRuleTypes";
export default class EmployeeController {
    getTotalSalary(empList: Employee[]): number {
        let totalSalary = 0;
        for (const emp of empList) {
            totalSalary += emp.getSalary();
        }
        return totalSalary;
    }

    sortByName(empList: Employee[], rule: string): Employee[] {
        const copied = [...empList];
        if (rule === ASC) {
            return copied.sort((a, b) => a.getName().localeCompare(b.getName()));
        } else if (rule === DESC) {
            return copied.sort((a, b) => b.getName().localeCompare(a.getName()));
        } else {
            this.printInvalidRule();
            return copied;
        }
    }

    sortBySalary(empList: Employee[], rule: string): Employee[] {
        const copied = [...empList];
        if (rule === ASC) {
            return copied.sort((a, b) => a.getSalary() - b.getSalary());
        } else if (rule === DESC) {
            return copied.sort((a, b) => b.getSalary() - a.getSalary());
        } else {
            this.printInvalidRule();
            return copied;
        }
    }

    private printInvalidRule(): void {
        console.error("Invalid rule");
    }
}