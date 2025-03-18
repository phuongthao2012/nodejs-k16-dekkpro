import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";
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
    // const winnerSpeed = winner.getRandomSpeed(100000);
    // console.log(winnerSpeed);
    
    console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()} km/h`);

}