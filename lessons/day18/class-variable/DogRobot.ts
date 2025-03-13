import { Robot } from "./Robot";
class DogRobot extends Robot{
    static {
        this.id =100;
    }
    getId(): number {
        return DogRobot.id;
    }
}
const lulu = new DogRobot();
console.log(lulu.getId());