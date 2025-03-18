import Employee from "./Employee";
export default class ContractEmployee extends Employee {
    maxSalary(): number {
        return (40 * 1000);
    }

    getType(): string {
        return 'Contract Employee';
    }
}
