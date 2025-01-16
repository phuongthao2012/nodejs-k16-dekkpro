/**
 * ****************************
 * Array Learning Method Protocol
 * Splice Method: remove and add element in array
 * 
 * ****************************
 */

const {isOddNumber} = require ('../../utils/NumberHandling');
let myArray = [1, 7,3,4];
/* let startIndex = 2;
let deleteCount = 1;
let addElement = 10;
let returnedValue = myArray.splice(startIndex, deleteCount, addElement);
console.log(`Da delete array ${returnedValue}`);
console.log(myArray); */

for (let index = 0; index < myArray.length; index++) {
    if (isOddNumber(myArray[index])) {
        // remove the emelement at the point of index
/*         let deleteValue = myArray.splice(index, 1);
        console.log(`Delete value: ${deleteValue}`); */
        removeElementFromArray(myArray, index);
        index--;
    }
}

function removeElementFromArray(arr, startIndex) {
    const deleteCount = 1;
    arr.splice(startIndex, deleteCount);
    }

console.log(myArray);