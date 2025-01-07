/**
 * ****************************
 * Sort
 * ****************************
 */

let length = intArr.length;
for (let index = 0; index < length -1; index++) {
    for (let index2 = 0; index2 < length -1 - index; index2++) {
        if (intArr[index2] > intArr[index2 + 1]) {
            let temp = intArr[index2];
            intArr[index2] = intArr[index2 + 1];
            intArr[index2 + 1] = temp;
        }
    }
}
// console.log(intArr);
module.exports = { intArr };
