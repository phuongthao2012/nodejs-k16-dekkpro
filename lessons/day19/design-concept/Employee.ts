export default abstract class Employee {
    // OOP: xay dung huong doi tuong
    protected salary: number;
    protected bonus: number;

    constructor(salary: number) {
        this.salary = salary;
        this.setBonus();// call abstract for set bonus
    }
/*     get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    } */
    public getsalary():number {
        return this.salary;
    }
    protected setsalary(salary) {
        this.salary = salary;
    }
    // Trong force is a relationship
    protected abstract setBonus():void;
    public getbonus():number{
        return this.bonus;
    }

}
/* export{Employee}
module.exports = Employee; */
