/* *
 * ****************************
 * Creating 1 object representing Bank Count Number with below structure:

        {
            name: String
            accountNumber: String,
            routingNumber: String,
            balance: Number
        }
        . Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts

        . Write a consolse interface app to:

        allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
        allow user to withdraw the money and avoid user to take more than current balance
        Note: Strongly recommend to create functions to process each tasks
        === Banking application===
        1. Find an account
        2. Update balance
        0. Exit the program
 * ****************************
 */
const rl = require('readline-sync')
const { getUserInput } = require('../../utils/ConsoleControler')
// create object default
const bankCountNumberRoot = {
    name: "Ng Thao",
    accountNumber: "123",
    rountingNumber: "000",
    balance: 100000,
}
// Clone bank account
let bankCountClone = JSON.parse(JSON.stringify(bankCountNumberRoot));
bankCountClone.accountNumber = "456";
bankCountClone.name = "Ph Hai";
bankCountClone.balance = 100;
console.log(bankCountNumberRoot);
console.log(bankCountClone);
consoleInterface();



function consoleInterface() {
    console.log(`========= Banking Application =========`);
    console.log(`\t 1. Find an account`);
    console.log(`\t 2. Update balance`);
    console.log(`\t 0. Exit the program`);
    console.log(`=======================================`);
    let isValidOption = true;
    let accountNumber;

    while (isValidOption) {
        const option = getUserInput();
        switch (option) {
            case 0:
                isValidOption = false;
                break;
            case 1:
                accountNumber = rl.question(`Which bank account you would like to find: `);
                const objectiveAccount = findAnAccount([bankCountNumberRoot, bankCountClone]);
                break;
            case 2:
                accountNumber = rl.question(`Please fill in bank account you would like to withdraw: `);
                withdrawMoney([bankCountNumberRoot, bankCountClone]);
                break;
            default:
                console.log("Input again");
                break;
        }

    }

    function findAnAccount(accounts) {
        let foundAccount = 0;
        for (account of accounts) {
            if (foundAccount == 0) {
                if (accountNumber == account.accountNumber) {
                    foundAccount = 1;
                    console.log(`Name: ${account.name}, Balance: ${account.balance}`);
                    return account;
                }
            }
        }
        if (foundAccount != 1) {
            console.log(`Account not found`);
        }
    }
    // this code could be enhanced by reuse function findAnAccount() , do it later 
    function withdrawMoney(accounts) {
        let withdrawAmount = Number(rl.question(`How much do you want to withdraw: `));
        let foundAccount = 0;
        let leftAmount = 0;
        for (account of accounts) {
            if (foundAccount == 0) {
                if (accountNumber == account.accountNumber) {
                    foundAccount = 1;
                    if (account.balance < withdrawAmount) {
                        console.log(`Could not withdraw because the ${withdrawAmount} is greater than your balance value: ${account.balance}`);

                    } else {
                        leftAmount = account.balance - withdrawAmount;
                        console.log(`Remaining: ${leftAmount} \n =====GOOD BYE=====`);
                    }
                }
            }
        }
        if (foundAccount != 1) {
            console.log(`Account not found`);
        }
    }
}







