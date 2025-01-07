/**
 * ****************************
 * Sort an integer array from min to max
    Input: [12, 34, 1, 16, 28]
    Expected output: [1, 12, 16, 28, 34]
 * ****************************
 */
let intArr = [12, 34, 1, 16, 28];
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
console.log(intArr);
