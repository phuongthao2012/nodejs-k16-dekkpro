import BankingAccount from "./BankingAccount";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingAcc = new SavingAccount();
let checkingAcc = new CheckingAccount();

savingAcc.deposit(1000);
savingAcc.withdraw(1000);
console.log("Saving account balance: ", savingAcc.getBalance());

checkingAcc.deposit(1000);
checkingAcc.withdraw(100);
console.log("Checking account balance: ", checkingAcc.getBalance());