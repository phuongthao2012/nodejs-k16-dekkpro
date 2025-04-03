import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
    constructor() {
        super();
        this.minimumBalance = 50;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void { 
        const errMsg = "Checking account must have minimum balance as 50";
        this._withdraw(amount, errMsg); 
    }
}