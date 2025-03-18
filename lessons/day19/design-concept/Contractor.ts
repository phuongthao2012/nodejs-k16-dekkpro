import  Employee  from "./Employee";
export default class Contractor extends Employee {
    constructor() {
        super( 10*1000);
    }
    setBonus():void{
        // TODO: provide detail implementation
        this.bonus = 0;
    }
}
let teo = new Contractor();
teo.setBonus();
console.log(teo.getbonus());