import  Employee  from "./Employee";
export default class FTE extends Employee {
    constructor() {
        super(20*1000);
    }
    // TODO: override setBonus()
    setBonus():void{
        // TODO: provide detail implementation
        this.bonus = 1*1000;
    }
}
let teo = new FTE();
teo.setBonus();
console.log(teo.getbonus());

