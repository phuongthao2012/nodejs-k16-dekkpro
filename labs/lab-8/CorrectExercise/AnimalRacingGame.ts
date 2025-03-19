import AnimalRacingController from "./AnimalRacingController";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";
let tiger = new Tiger("Meomeo");
let dog = new Dog("GauGau");
let horse = new Horse("Hihi");
const winner = AnimalRacingController.getWiner([tiger,dog,horse]);
console.log(`The winner is ${winner.getName()} with speed ${winner.getSpeed()}`);