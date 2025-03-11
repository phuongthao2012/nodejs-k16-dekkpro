for (number = 0; number < 5; number++) {
    console.log(number);
}
console.log(`thao${number}`);
// var and no define means global
// const and let has limit scope inside the block {}
console.log("=============");


let arr = [1, 2, 1, 4, 0];
arr.push(6);
// filter, bat cu 1 function nao cua array cung se nhan vao 3 parameter/ tham so: value, index, originalArray
/* let evenNumber = arr.filter(function (value,index,originalArray){
    return value %2 ===0;
}) */
let evenNumber = arr.filter(isEvenNumber);
function isEvenNumber(value, index, originalArray) {
        console.log("\t=============");
        console.log(`\tvalue is ${value}`);
        console.log(`\tindex is ${index}`);
        console.log(`\toriginalArray is ${originalArray}`);
        // return index;
        return value %2 ===0;
}
console.log("=============");
console.log(evenNumber);


