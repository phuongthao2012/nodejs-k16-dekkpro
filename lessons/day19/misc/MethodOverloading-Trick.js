/**
 * ****************************
 * NO Method overloading in JS, only happen in the same class
 * ****************************
 */
class MethodOverLoading {
    /*     static add(a, b) {
            return a + b;
        } */
    /*     static add(a, b, c) {
            result a + b + c;
        } */

    // Rest Parameter: 3 dau cham dai dien cho 1 array cua tat ca tham so nhan vao
    // Map: anh xa ~ map qua 1 mang khasc
/*     static add(...nums) {
        let sum = 0;
        for (let num of nums) {
            sum += num;
        }
        return sum;
    } */
    static add2(factor,...nums) {
        return nums.map(num => num * factor);
    }
    static add3(factor, another,...nums) {
        return nums.map(num => num * factor);
    }
}

const result2 = MethodOverLoading.add2(10, 2);
const result2a = MethodOverLoading.add3(10, 2);
const result3 = MethodOverLoading.add2(10, 2, 3);
const result3a = MethodOverLoading.add3(10, 2, 3);
console.log(result2);
console.log(result3);
console.log(result2a);
console.log(result3a);

MethodOverLoading.add2(2,3,4,5,6);
class ArrayHelper {
    static filterNumber(array, isEven=false){
        if (isEven){
            return array.filter(num => num % 2 === 0);
        }else{
            return array.filter(num => num % 2 !== 0);
        }
    }
}
let targetArray = [1,2,3,4,5,6,7,8,9,10];
let isEven = true;
const evenNumber = ArrayHelper.filterNumber(targetArray, isEven);
const oddNumber = ArrayHelper.filterNumber(targetArray);
console.log(evenNumber);
console.log(oddNumber);
