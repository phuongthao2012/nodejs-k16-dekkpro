"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 0; // Khởi tạo giá trị mặc định
        // this.validateAge(age);
        this.name = name;
        // this.age = age;
    }
    // Getter cho age
    Person.prototype.getAge = function () {
        return this.age;
    };
    // service method: method public for outside to use
    Person.prototype.setAge = function (age) {
        this.validateAge(age);
        this.age = age;
        /*         if (age < 0) {
                    throw new Error("Age must be greater than 0");
                }
                this.age = age; */
    };
    // support method inside the class
    Person.prototype.validateAge = function (age) {
        if (age < 0) {
            throw new Error("Age must be greater than 0");
        }
    };
    return Person;
}());
exports.default = Person;
