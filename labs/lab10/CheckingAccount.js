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
    function CheckingAccount(accountNumber, accountName, initBalance) {
        if (initBalance === void 0) { initBalance = 50; }
        return _super.call(this, accountNumber, accountName, initBalance) || this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited ".concat(amount, " to Checking Account. New balance: ").concat(this.balance));
        }
        else {
            console.log("Deposit amount must be greater than 0");
        }
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount < 0 || amount > this.balance - 50) {
            console.log("With withdrawing ".concat(amount, ", it's invalid number, the minimum balance is 50"));
        }
        else {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, " from Checking Account. New balance: ").concat(this.balance));
        }
    };
    CheckingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return CheckingAccount;
}(BankingAccount_1.default));
exports.default = CheckingAccount;
