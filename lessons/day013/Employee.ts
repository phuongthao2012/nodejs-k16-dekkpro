export default class Employee {
    // OOP: xay dung huong doi tuong
    protected name: string;
    protected salary: number;
    constructor(name: string, salary: number) {
        this.name = name;
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
    setsalary(salary) {
        this.salary = salary;
    }

}
/* export{Employee}
module.exports = Employee; */
