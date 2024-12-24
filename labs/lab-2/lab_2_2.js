/**
 * ****************************
 * Allow user to input a number, print out it’s an odd or even number
 * ****************************
 */

const readline = require('readline-sync');

let inputNumber = Number(readline.question('Please input something: '));
inputNumber = Math.round(inputNumber);
if ((isNaN(inputNumber))) {
    console.log("Dummy input");

} else
    //Check odd or even
    if (typeof (inputNumber) === "number") {
        console.log("Continue");
        let remainNumber = inputNumber % 2;
        if (remainNumber == 1) {
            console.log("Odd number");

        } else {
            console.log("Even number");

        }
        // } else if (isNaN(inputNumber)){
        //     console.log("Not a number");

        // }
    }