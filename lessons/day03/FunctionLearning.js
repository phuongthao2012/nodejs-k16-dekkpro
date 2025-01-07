/**
 * ****************************
 * Declaration of a function
 * DRY - Don't Repeat Yourself
 * SOLID - Single Responsibility Principle
 * Clean Code book
 * camelCase        - function name
 * ****************************
 */

/* Method 1 - hoisting function declaration - calling before declaration - dang len tren */
let returnedValue = functionName();
function functionName() {
    return 1;
}


/* Method 2 - function expression - NO hoisting - khong call function ma thuc hien luon */
// example wrong
/* let sum = addNumber(1,2);
const addNumber =function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
} */

// example true
const addNumber = function (firstNumber, secondNumber) {
    console.log(`\tResult ${firstNumber + secondNumber}`);
    return firstNumber + secondNumber;
    // doan nay da return nen khong in ra duoc
    // console.log(`\tResult ${firstNumber + secondNumber}`);
    
};
let sum = addNumber(1, 2);
console.log("Sum: " + sum);


