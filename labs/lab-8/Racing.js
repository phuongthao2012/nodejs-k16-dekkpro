"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Horse_1 = require("./Horse");
var Tiger_1 = require("./Tiger");
var Dog_1 = require("./Dog");
main();
function main() {
    var horse = new Horse_1.default();
    var tiger = new Tiger_1.default();
    var dog = new Dog_1.default();
    var racingAnimals = [horse, tiger, dog];
    var winner = racingAnimals.sort(function (a, b) { return b.getSpeed() - a.getSpeed(); })[0];
    console.log("horse:", horse.getSpeed());
    console.log("tiger:", tiger.getSpeed());
    console.log("dog:", dog.getSpeed());
    // const winnerSpeed = winner.getRandomSpeed(100000);
    // console.log(winnerSpeed);
    console.log("Winner is ".concat(winner.getName(), ", with speed: ").concat(winner.getSpeed(), " km/h"));
}
