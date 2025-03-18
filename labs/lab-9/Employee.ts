const readline = require('readline-sync');
export default abstract class Employee {
    public salary: number;
    public name: string;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
    abstract maxSalary(): number;
    abstract getType(): string;
    public setSalary(salary: number): void {
        // While salary exceeds the max allowed, input again
        while (salary > this.maxSalary()) {
            console.log(`\t ${this.name}'s salary exceeds the max limit of ${this.maxSalary()}.`);
            salary = Number(readline.question(`Please enter a valid salary for ${this.name} (up to ${this.maxSalary()}):`));
        }
        this.salary = salary;
    }


}
