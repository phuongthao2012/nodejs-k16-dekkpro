import  Employee  from "../Employee";
export class FTE extends Employee {
    constructor(name: string, salary: number) {
        super(name, 2000);
    }
    printSalary(){
        console.log(this.salary);
        
    }
}