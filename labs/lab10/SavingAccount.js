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
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, accountName, initBalance) {
        return _super.call(this, accountNumber, accountName, initBalance) || this;
    }
    SavingAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited ".concat(amount, " to Saving Account. New balance: ").concat(this.balance));
        }
        else {
            console.log("Deposit amount must be greater than 0");
        }
    };
    SavingAccount.prototype.withdraw = function (amount) {
        if (amount < 0 || amount > this.balance) {
            console.log("With withdrawing ".concat(amount, ", it's invalid amount"));
        }
        else {
            this.balance -= amount;
            console.log("Withdrew ".concat(amount, " from Saving Account. New balance: ").concat(this.balance));
        }
    };
    SavingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SavingAccount;
}(BankingAccount_1.default));
exports.default = SavingAccount;
