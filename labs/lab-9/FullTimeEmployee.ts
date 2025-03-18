import Employee from "./Employee";
export default class FullTimeEmployee extends Employee {
    maxSalary(): number {
        return 50000;
    }
    // override abstract method in order to get the empolyee type
    getType(): string {
        return 'Full Time Employee';
    }
}
