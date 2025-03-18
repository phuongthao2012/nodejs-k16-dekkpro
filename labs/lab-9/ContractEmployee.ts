import Employee from "./Employee";
export default class ContractEmployee extends Employee {
    protected maxSalary(): number {
        return (40 * 1000);
    }

    public getType(): string {
        return 'Contract Employee';
    }
}
