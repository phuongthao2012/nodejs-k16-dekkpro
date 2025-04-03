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
var BankingAccount_1 = require("./BankingAccount");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super.call(this) || this;
        _this.minimumBalance = 50;
        return _this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        var errMsg = "Checking account must have minimum balance as 50";
        this._withdraw(amount, errMsg);
    };
    return CheckingAccount;
}(BankingAccount_1.default));
exports.default = CheckingAccount;
