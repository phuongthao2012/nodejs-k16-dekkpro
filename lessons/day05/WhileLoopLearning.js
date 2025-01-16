/**
 * ****************************
 * while loop
 * ****************************
 */
/* // minimum param
let index = 0;
for (; index < 5;) {
    console.log(index);
    index++;
}
// while loop when you dont know the loop time
while (index < 5) {
    console.log(index);
    index++;
} */



/**
 * ****************************
 * Lucky number game
 * 1. Guess the number
 * 0. Exit!
 * ****************************
 */
// trong khi isStilPlaying = true thi chay vong lap
const readline = require('readline-sync');
// define bien de chay loop
let isStilPlaying = true;
while (isStilPlaying) {
    printGameMenu();
    let userOption = getUserOption();
// tim so ma user nhap
    if (userOption === 0) {
        isStilPlaying = false;
    } else if (userOption === 1) {
        // random number luon luon khong bao gio dung bang so nguyen, nen phai nhan len 10
        // chay tu 1 den 10
        // let randomNumber = Math.floor(Math.random() * 10) + 1;
        // chay tu 1 den 100
        let randomNumber = Math.floor(Math.random() * 1000) + 1;
        console.log(`\tLucky number is ${randomNumber}`);
        
        // playGame();
    } else {
        console.log('Invalid option');
    }

}
console.log("See you again!");
function printGameMenu() {
    console.log("****************************");
    console.log("1. Guess the number");
    console.log("0. Exit!");
    console.log("****************************");
}
function getUserOption() {
    // parseInt: convert string to number do dong 33 so sanh so number
    return parseInt(readline.question("Please select an option: "));
}