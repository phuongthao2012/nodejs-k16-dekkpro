import Employee from "./Employee";
export default class PartTimeEmployee extends Employee {
    constructor() {
        super(5 * 1000);
    }
    // override
    public setsalary(salary: number) {
        this.salary = salary;
    }
}