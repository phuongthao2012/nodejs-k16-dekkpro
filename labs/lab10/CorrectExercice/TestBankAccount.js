"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./CheckingAccount");
var SavingAccount_1 = require("./SavingAccount");
var savingAcc = new SavingAccount_1.default();
var checkingAcc = new CheckingAccount_1.default();
savingAcc.deposit(1000);
savingAcc.withdraw(1000);
console.log("Saving account balance: ", savingAcc.getBalance());
checkingAcc.deposit(1000);
checkingAcc.withdraw(100);
console.log("Checking account balance: ", checkingAcc.getBalance());
