export class Robot {
    static id = 0;
constructor(){
    // moi lan khoi tao robot thi ID se tang len 1 don vi
    Robot.id++;
}
getId(): number{
    return Robot.id;
}
}
const lulu = new Robot();
// console.log(lulu.getId());
const meomeo = new Robot();
console.log(lulu.getId());
console.log(meomeo.getId());
