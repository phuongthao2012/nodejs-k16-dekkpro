"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = 0; // Khởi tạo giá trị mặc định
        // this.validateAge(age);
        this.name = name;
        this.age = age;
    }
    /*     // Getter cho age -> read only
        public getAge(): number {
            return this.age;
        }
        public getName(): string {
            return this.name;
        }
     */
    // Setter cho age, name -> write only
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
exports.default = Person;
// teo is immutable object -> READ ONLY
var teo = new Person("Teo", 20);
console.log(teo);
teo.setAge(21);
console.log(teo);
