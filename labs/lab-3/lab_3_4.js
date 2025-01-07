/**
 * ****************************
 * Merge 2 SORTED integer array into one SORTED array
    Array 01: [1, 12, 16, 28, 34]
    Array 02: [1, 13, 16, 27, 99]
    Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 * ****************************
 */

const {sortArray} = require('../../utils/ArrayHandling.js');
let intArr1 = [1, 12, 16, 28, 34];
let intArr2 = [1, 13, 16, 27, 99];
for (let index = 0; index <intArr2.length; index++) {
    intArr1.push(intArr2[index]);
};
console.log(sortArray(intArr1));
