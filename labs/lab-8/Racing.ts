import { Horse } from "./Horse.ts";
import { Tiger } from "./Tiger.ts";
import { Dog } from "./Dog.ts";
main();
function main() {
    const horse = new Horse();
    const tiger = new Tiger();
    const dog = new Dog();
    const racingAnimals = [horse, tiger, dog];
    const winner = racingAnimals.sort((a, b) => b.Speed() - a.Speed())[0];
    console.log("horse:", horse.Speed());
    console.log("tiger:", tiger.Speed());
    console.log("dog:", dog.Speed());

    console.log(`Winner is ${winner.Name()}, with speed: ${winner.Speed()} km/h`);

}