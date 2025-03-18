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
var Employee_1 = require("./Employee");
var FTE = /** @class */ (function (_super) {
    __extends(FTE, _super);
    function FTE() {
        return _super.call(this, 20 * 1000) || this;
    }
    // TODO: override setBonus()
    FTE.prototype.setBonus = function () {
        // TODO: provide detail implementation
        this.bonus = 1 * 1000;
    };
    return FTE;
}(Employee_1.default));
exports.default = FTE;
var teo = new FTE();
teo.setBonus();
console.log(teo.getbonus());
