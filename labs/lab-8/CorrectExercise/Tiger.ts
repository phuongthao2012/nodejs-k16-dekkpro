
import Animal from "./Animal";
export default class Tiger extends Animal{
    constructor(name: string){//this one could be no input name, but for flexible, should be the string for named the instant
        
        super(name, 100);
    }
}