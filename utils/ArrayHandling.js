/**
 * ****************************
 * Sort
 * ****************************
 */
// let intArr = [12, 34, 1, 16, 28];
function sortArray(arr) {
    let length = arr.length;
    for (let index = 0; index < length; index++) {
        for (let index2 = 0; index2 < length - index; index2++) {
            if (arr[index2] > arr[index2 + 1]) {
                let temp = arr[index2];
                arr[index2] = arr[index2 + 1];
                arr[index2 + 1] = temp;
            }
        }
    }
    
    return arr;
}
// console.log(sortArray(intArr));
module.exports = { sortArray };
