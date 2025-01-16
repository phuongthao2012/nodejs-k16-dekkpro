/**
 * ****************************
 * break, thoat khoi vong lap for and while
 * continue, skip vong lap hien tai, chuyen sang vong lap tiep theo
 * ****************************
 */
let array = [1, 2, 3, 4, 5];
// default =-1 nghia la chua tim thay
let targetIndex=-1
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 3) {
        // tim thay index  thoa dieu kien thi gan targetIndex = index
        targetIndex = index;
        break;
    }
}
if (targetIndex === -1) {
    console.log('Not found');
}else{
    console.log(`Found at index ${targetIndex}`);
}

// continue
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 3) {
        // tim thay index  thoa dieu kien thi gan targetIndex = index
        targetIndex = index;
        continue;
    }else{
        console.log(element);
    }
}

// return an array of a possitive number, number 3 among them. increase upto 4 for the rest number
increaseValues(array);
console.log("After increase values: ", array);

function increaseValues(array) {
    for(let index =0;index<array.length;index++){
        const value=array[index];
        if (value === 3) {
            // return;//on the spot out of loop and do nothing on the rest, dong 54 se khong chay
            // break;// dong code 54 se chay
            continue;          
            

        }else{
            array[index] = value + 4;
        }
    }
    // neu dung return thi dong nay se khong chay, neu dung break thi okay
    console.log("tada");
}