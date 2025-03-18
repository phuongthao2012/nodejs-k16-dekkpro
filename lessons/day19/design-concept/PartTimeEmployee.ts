import Employee from "./Employee";
export default class PartTimeEmployee extends Employee {
    constructor() {
        super(5 * 1000);
    }
    // override
    public setsalary(salary: number) {
        this.salary = salary;
    }
    setBonus():void{
        // TODO: provide detail implementation
        this.bonus = 0;
    }
}
let teo = new PartTimeEmployee();
teo.setBonus();
console.log(teo.getbonus());