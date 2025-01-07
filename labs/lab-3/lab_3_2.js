/**
 * ****************************
 * Finding maximum value/minimum value from an integer array

    let intArr = [1, 2, 3, 4, 5];
    Minimum: 1
    Maximum: 5
 * ****************************
 */
let intArr = [1, 2, 3, 4, 5];
let min=intArr[0];
let max=intArr[0];
for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] <= min) {
        min = intArr[index];
    }
}
for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] >= max) {
        max = intArr[index];
    }
}
console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);
