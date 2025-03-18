export default class Employee {
    // OOP: xay dung huong doi tuong
    protected salary: number;
    constructor(salary: number) {
        this.salary = salary;
    }
/*     get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    } */
    getsalary() {
        return this.salary;
    }
    protected setsalary(salary) {
        this.salary = salary;
    }

}
/* export{Employee}
module.exports = Employee; */
