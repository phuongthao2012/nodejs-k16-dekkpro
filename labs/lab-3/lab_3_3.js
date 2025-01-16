/**
 * ****************************
 * Sort an integer array from min to max
    Input: [12, 34, 1, 16, 28]
    Expected output: [1, 12, 16, 28, 34]
    while loop
    for loop
 * ****************************
 */
let intArr = [12, 34, 1, 28, 16];
let length = intArr.length;

let unsortedPosition = intArr.length-1;
// let unsortedPosition = intArr[intArr.length-1];
// for loop
/* for (;unsortedPosition>0;unsortedPosition--){
    console.log("unsortedPosition: ", unsortedPosition);
    
    for (let loopindex2=0; loopindex2<unsortedPosition;loopindex2++){
        const leftValue = intArr[loopindex2];
        const rightValue = intArr[loopindex2+1];
        console.log("leftValue: ", leftValue);
        console.log("rightValue: ", rightValue);
        const isWrongOrder = leftValue>rightValue;
        
        
        if (isWrongOrder){
            swap(intArr,loopindex2);
        }
    }
} */
// while loop
// gia dinh vi tri chua duoc sort o cuoi cung, theo tung dong lap. vi tri cuoi den gan cuoi se la gia tri lon nhat
while (unsortedPosition>0){
    console.log("unsortedPosition: ", unsortedPosition);
    
    for (let loopindex2=0; loopindex2<unsortedPosition;loopindex2++){
        const leftValue = intArr[loopindex2];
        const rightValue = intArr[loopindex2+1];
        console.log("leftValue: ", leftValue);
        console.log("rightValue: ", rightValue);
        const isWrongOrder = leftValue>rightValue;
        
        
        if (isWrongOrder){
            swap(intArr,loopindex2);
        }
    }
    unsortedPosition--;
}
console.log(intArr);

function swap(intArr,index){
    let temp = intArr[index];
    intArr[index] = intArr[index+1];
    intArr[index+1] = temp;
    console.log("index loop2: ", index);
    console.log(`\t array value: ${intArr}`);
}

/* for (let index = 0; index < length - 1; index++) {
    console.log("index first: ", index);
    console.log(`\t array value: ${intArr}`);
    for (let index2 = 0; index2 < length - 1 - index; index2++) {
        if (intArr[index2] > intArr[index2 + 1]) {
            let temp = intArr[index2];
            intArr[index2] = intArr[index2 + 1];
            intArr[index2 + 1] = temp;
            console.log("index2: ", index2);
            console.log(`\t array value: ${intArr}`);


        }
        console.log("index2: ", index2);
        console.log(`\t array value: ${intArr}`);
    }
    console.log("index after: ", index);
    console.log(`\t array value: ${intArr}`);
}
console.log(intArr); */
