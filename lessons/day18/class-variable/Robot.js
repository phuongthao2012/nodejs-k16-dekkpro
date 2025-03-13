"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot() {
        // moi lan khoi tao robot thi ID se tang len 1 don vi
        Robot.id++;
    }
    Robot.prototype.getId = function () {
        return this.id;
    };
    Robot.id = 0;
    return Robot;
}());
exports.Robot = Robot;
var lulu = new Robot();
// console.log(lulu.getId());
var meomeo = new Robot();
console.log(lulu.getId());
console.log(meomeo.getId());
