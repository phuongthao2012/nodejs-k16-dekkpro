"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalRacingController = /** @class */ (function () {
    function AnimalRacingController() {
    }
    AnimalRacingController.getWiner = function (animalList) {
        var winner = animalList[0];
        for (var _i = 0, animalList_1 = animalList; _i < animalList_1.length; _i++) {
            var animal = animalList_1[_i];
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        }
        return winner;
    };
    return AnimalRacingController;
}());
exports.default = AnimalRacingController;
