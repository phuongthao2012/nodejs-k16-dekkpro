import Employee from "./Employee";
export default class ContractEmployee extends Employee {
    protected setMaxSalary(): number {
        return (40 * 1000);
    }

    public getType(): string {
        return 'Contract Employee';
    }
    public setSalary(salary: number): void {
        this.salary = salary;
    }

}
