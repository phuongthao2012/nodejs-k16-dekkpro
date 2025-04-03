import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        const errMsg = "Savings account must maintain a minimum balance of 1000";
        this._withdraw(amount, errMsg);
    }


}