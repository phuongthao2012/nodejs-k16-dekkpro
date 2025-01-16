const readline = require('readline-sync');
let inputNumber = Number(readline.question('Enter a number: '));
switch (inputNumber){ 
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four HUrray");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Invalid number");
        break;
};

function randomNumber(){
    return Math.floor(Math.random()*10);
}