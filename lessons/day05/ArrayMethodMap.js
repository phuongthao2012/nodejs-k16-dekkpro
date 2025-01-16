/**
 * ****************************
 * Mapping
 * ****************************
 */
let array = [1, 2, 3, 4, 5];
/* // map means apply a rule to each element of an array, do not change array

let returnedValues =array.map(myRule);
console.log(returnedValues);
console.log(array);
// each value, 
function myRule(value, index, array) {
    return value * 2;
} */

// forEach - khong thay doi va return any value


/* array.forEach(addAutommationUsername);
function addAutommationUsername(value, index, array) {
    return `Automation_${value}`;
}
console.log(array); => [ 1, 2, 3, 4, 5 ]*/ 

/* let userList =[];
array.forEach(addAutommationUsername);
function addAutommationUsername(value, index, array) {
    userList.push(`Automation_${value}`);

}
console.log(userList);
/* [
    'Automation_1',
    'Automation_2',
    'Automation_3',
    'Automation_4',
    'Automation_5'
  ] */ 

    // sort text
/*     let strings =['f', 'g', 'b', 'd'];
    strings.sort();//sort asc
    strings.reverse(); //sort desc
    console.log(strings); // [ 'b', 'd', 'f', 'g' ]"); */

    // sort number quy ve text
    let anotherArray = [100, 12, 33];
    anotherArray.sort(sortNumberASC);
    console.log(anotherArray);
    anotherArray.sort(sortNumberDESC);
    console.log(anotherArray);

    function sortNumberASC(a, b) {
        console.log(a-b);
        
        return a - b;
    }
    function sortNumberDESC(a, b) {
        console.log(a-b);
        
        return b - a;
    }
    // 67, 35,1
    let mixed = ['A', 'a', '1'];
    mixed.sort();
    console.log(mixed);
    

    
