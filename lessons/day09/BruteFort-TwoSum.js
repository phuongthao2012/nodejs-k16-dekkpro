/**
 * ****************************
 * cach 1
 * ****************************
 */
const givenArray = [3, 7, 22, 1];
const targetNum = 8;
let indices = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices); // Output: [0, 3]
//time complexity: O(n^2)
function findIndicesUsingBruteForce(array, targetNum) {
    for (let firtNumberIndex = 0; firtNumberIndex < array.length - 1; firtNumberIndex++) {
        const firstNum = array[firtNumberIndex];
        for (let secondNumberIndex = firtNumberIndex + 1; secondNumberIndex < array.length; secondNumberIndex++) {
            const secondNum = array[secondNumberIndex];
            if (secondNum === targetNum - firstNum) {
                return [firtNumberIndex, secondNumberIndex];
            }
        }
    }
    return []; // Return empty array if no pair is found
}



/**
 * ****************************
 * cach 2
 * ****************************
 */
//time complexity: O(n) dung map

// 0(n)
// [3, 7, 22, 2], target number: 8
function findIndicesUsingBruteForce(array, targetNum) {
    let numMap = new Map();
    for (let currentNumberIndex = 0; currentNumberIndex < array.length; currentNumberIndex++) {
        const currentNum = array[currentNumberIndex];
        const lookingNum = targetNum - currentNum;
        if(numMap.has(lookingNum)) {
            return [numMap.get(lookingNum), currentNumberIndex];
        }
        numMap.set(currentNum, currentNumberIndex);
        /**
        * [
        * [3(value), 0(index)],
        * [7(value), 1(index)],
        * [22(value), 2(index)],
        * [2(value), 2(index)],
        * ]
        * */
    }
    return [];
}


let indicesMap = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices); // Output: [0, 3]