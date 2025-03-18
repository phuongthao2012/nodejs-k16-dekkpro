"use strict";
/**
 * ****************************
 * Credit: Nguyen Thinh Khang (Dev), in Selenium K1 for contributing the exercise.

This is the first simple version racing contest problem.
Racing animal simple version*
When an animal was born, it will have a random speed with below info

Horse: Max 75 km/h
Tiger: Max 100 Km/h
Dog: Max 60 KM/h*
Create an Animal class with a method getSpeed() which return animal's speed
Create 3 objects for those 3 animal type
Run and see which animal is winner for racing
Print result with format: Winner is <Animal name>, with speed: <speed>
Ex: const randomNumber = Math.floor(Math.random() * 100) + 1;
 * ****************************
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    // protected maxSpeed: number;
    function Animal(name, maxSpeed) {
        this.name = name;
        // this.maxSpeed = maxSpeed;
        this.speed = this.getRandomSpeed(maxSpeed);
    }
    Animal.prototype.getRandomSpeed = function (maxSpeed) {
        return (Math.floor(Math.random() * maxSpeed) + 1);
    };
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.default = Animal;
