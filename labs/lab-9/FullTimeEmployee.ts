import Employee from "./Employee";
export default class FullTimeEmployee extends Employee {
    maxSalary(): number {
        return 50000;
    }

    getType(): string {
        return 'Full Time Employee';
    }
}
