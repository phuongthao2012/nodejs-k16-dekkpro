"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Teo = /** @class */ (function (_super) {
    __extends(Teo, _super);
    function Teo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teo.prototype.setAge = function (age) {
        if (age < 18) {
            throw new Error("Teo is not allowed to have less than 18 years old");
        }
        this.age = age;
    };
    return Teo;
}(Person_1.default));
exports.default = Teo;
