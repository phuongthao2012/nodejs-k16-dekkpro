/**
 * ****************************
 * Count how many odd, even number(s) in an integer array

    let intArr = [1, 2, 3, 4, 5];

    Even numders: 2
    Odd numbers: 3
 * ****************************
 */
const { isEvenNumber } = require ('../../utils/NumberHandling.js');
let intArr = [1, 2, 3, 4, 5];
let countNumberOfEven = 0;
let countNumberOfOdd = 0;
for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] == 0) {
        continue;
    }
    if (isEvenNumber(intArr[index])) {
        countNumberOfEven++;
    } else {
        countNumberOfOdd++;
    }
}
console.log(`\t Number of Even numbers: ${countNumberOfEven}`);
console.log(`\t Number of Odd numbers: ${countNumberOfOdd}`);