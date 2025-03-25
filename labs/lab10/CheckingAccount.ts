import BankingAccount from "./BankingAccount";
export default class CheckingAccount extends BankingAccount {
    constructor(accountNumber: string, accountName: string, initBalance: number = 50) {
        super(accountNumber, accountName, initBalance);
    }
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} to Checking Account. New balance: ${this.balance}`);
        } else {
            console.log(`Deposit amount must be greater than 0`);
        }
    }
    public withdraw(amount: number): void {
        if (amount < 0 || amount > this.balance - 50) {
            console.log(`With withdrawing ${amount}, it's invalid number, the minimum balance is 50`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount} from Checking Account. New balance: ${this.balance}`);
        }

    }
    public getBalance(): number {
        return this.balance;
    }
}