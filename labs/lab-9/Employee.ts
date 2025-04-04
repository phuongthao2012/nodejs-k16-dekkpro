export default abstract class Employee {
    protected salary: number;
    private name: string;
    private maxSalary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.maxSalary = this.setMaxSalary(); 
    }
    protected abstract setMaxSalary(): number;
    public abstract getType(): string;
    protected abstract setSalary(salary: number): void ;
    public getSalary(): number {
        return this.salary;
    }
    public getName(): string {
        return this.name;
    }
    public getMaxSalary(): number {
        return this.maxSalary;
    }

}
// let emp = new Employee("abc", 1000);// khong the tao instance tu 1 abstract class
