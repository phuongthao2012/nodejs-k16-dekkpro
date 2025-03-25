import BankingAccount from "./BankingAccount";
export default class SavingAccount extends BankingAccount {
    constructor(accountNumber: string, accountName: string, initBalance: number) {
        super(accountNumber, accountName, initBalance);
    }
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} to Saving Account. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than 0");
        }

    }
    public withdraw(amount: number): void {
        if (amount < 0 || amount > this.balance) {
            console.log(`With withdrawing ${amount}, it's invalid amount`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from Saving Account. New balance: ${this.balance}`);
        }

    }
    public getBalance(): number {
        return this.balance;
    }
}