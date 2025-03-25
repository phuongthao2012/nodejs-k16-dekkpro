import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";
const saving = new SavingAccount("123","Ti",500);
// console.log(JSON.stringify(saving));
console.log(`\t Initial Saving Account with: ${JSON.stringify(saving)}`);

saving.deposit(200);
saving.withdraw(100);
saving.withdraw(-100);
console.log(`Saving account of ${saving.getAccountName()} with balance: ${saving.getBalance()}`);

const checking = new CheckingAccount("456","Teo",500);
console.log(`\t Initial Checking Account with: ${JSON.stringify(checking)}`);
checking.deposit(100);
checking.withdraw(320);
checking.withdraw(250);
console.log(`Saving account of ${checking.getAccountName()} with balance: ${checking.getBalance()}`);
