import { Horse } from "./Horse.ts";
import { Tiger } from "./Tiger.ts";
import { Dog } from "./Dog.ts";
main();
function main() {
    const horse = new Horse();
    const tiger = new Tiger();
    const dog = new Dog();
    const racingAnimals = [horse, tiger, dog];
    const winner = racingAnimals.sort((a, b) => b.getSpeed() - a.getSpeed())[0];
    console.log("horse:", horse.getSpeed());
    console.log("tiger:", tiger.getSpeed());
    console.log("dog:", dog.getSpeed());

    console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()} km/h`);

}