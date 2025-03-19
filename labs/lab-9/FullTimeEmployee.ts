import Employee from "./Employee";
export default class FullTimeEmployee extends Employee {
    public setMaxSalary(): number {
        return (50 * 1000);
    }
    // override abstract method in order to get the empolyee type
    public getType(): string {
        return 'Full Time Employee';
    }
    public setSalary(salary: number): void {
        this.salary = salary;
    }

}
