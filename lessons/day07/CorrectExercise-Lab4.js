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
const readline = require('readline-sync')
// db
const account1 = {
    accountName: 'Teo',
    accountNumber: '123456',
    rountingNumber: '123456',
    balance: 20000,
};
const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Ti';
account2.accountNumber = '123457';
const accounts = [account1, account2];
bankApp();
function bankApp() {
    // do no co thay doi nen de la let, khong phai la const
    let isInteract = true;
    // BUG, neu goi cho nay thi menu chi call 1 lan duy nhat
    // printTheAppMenu();
    // const getOption = getUserAction();
    while (isInteract) {
        printTheAppMenu();
        const getOption = getUserAction();
        switch (getOption) {
            case 1:
                const foundAccount = findAccountByAccountNumber();
                // neu khong tim thay account, se tra ve undefined tuong tu nhu false
                console.log(foundAccount);
                // ************ham found account tra ve 1 mang null nen phai dung isNaN de kiem tra
                if (isNaN(foundAccount)) {
                    console.log('Account not found');
                } else {
                    const { accountName, balance } = foundAccount;
                    console.log(`Account Name: ${accountName}, balance: ${balance}`);
                }

                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteract = false;
                break;
            default:
                console.log('Invalid action');
                break;
        }
        console.log("===============SEE YOU NEXT TIME =======================");


    }
}
// Support function
function printTheAppMenu() {
    console.log(`========= Banking Application =========`);
    console.log(`\t 1. Find an account`);
    console.log(`\t 2. Update balance`);
    console.log(`\t 0. Exit the program`);
    console.log(`=======================================`);
}
function getUserAction() {
    return Number(readline.question('Please choose your action: '));
}
function findAccountByAccountNumber() {
    // by default phai luon duoc return an empty object
    // undefine la khong co gia tri, khong phai la object, truong hop nay default phai la 1 object rong
    let foundAccount = {};
    const inputAccountNumber = readline.question('Please enter account number: ');
    // dung for of de lap qua cac account duoc khai bao ben tren, neu tim thay
    for (const account of accounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            // da tim thay roi nen khong tim nua, gia dinh account la unique
            // cho if cung co the return truc tiep value, khoi break, nhung khong nen, function nay chi nen tra ve co gia tri hay khong
            break;
        }
    }
    return foundAccount;

}
// readability, extendability, maintainability -> nen tach ra thanh cac function nho va return ca 1 object, khong phai la nhieu gia tri
function updateBalance() {
    const MAX_ALLOWED_ATTEMPT = 3;
    let attemps = 0;
    do {
        const foundAccount = findAccountByAccountNumber();
        // let hay const deu duoc, 2 cach nay deu dung
        // lay ra gia tri accountNumber cua account
        // let isNotFound = !foundAccount;
        const isNotFound = foundAccount.accountNumber === undefined;
        if (isNotFound) {
            console.log(`Attemp:  ${attemps + 1}`);

            attemps++;

        } else {
            // update balance
            // lay ra balance cua account
            const { balance } = foundAccount;
            console.log(`Current balance: ${balance}`);
            const expectedWitdrawAmount = Number(readline.question('Please enter the amount you want to withdraw: '));
            if (isNaN(expectedWitdrawAmount) || expectedWitdrawAmount <= 0 || expectedWitdrawAmount > balance) {
                console.log(`Invalid amount, please try again`);
            } else {
                // loggin about successful withdraw
                // ... update balance khi nay cap nhat thang so balance cua doi tuong hien tai
                // 2 cach nay cach nao cung dung
                // foundAccount.balance -= expectedWitdrawAmount;
                foundAccount.balance = foundAccount.balance - expectedWitdrawAmount;
                attemps = MAX_ALLOWED_ATTEMPT;
                // in memory DB
                console.log(`Your new balance: ${foundAccount.balance}`);
                break;
            }
        }
    }
    while (attemps < MAX_ALLOWED_ATTEMPT);

}

// vidu cua thay
const obj = { name: 'Teo' };
const hocsinh = [obj];
function getAccount() {
    return hocsinh[0];
}
const foundAccount = getAccount();
foundAccount.name = 'Ti';
console.log(obj);
console.log(foundAccount);
 