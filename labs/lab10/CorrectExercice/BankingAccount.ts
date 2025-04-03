export default abstract class BankingAccount {
    protected balance: number = 0;
    protected minimumBalance: number = 0;

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    getBalance(): number{
        return this.balance;
    };

    protected _withdraw(amount: number, errMsg: string): number {
        const draftBalance = this.balance - amount;
        if (draftBalance < this.minimumBalance) {
            throw new Error(errMsg);
        }
        this.balance = draftBalance;
        return this.balance;
    }
}