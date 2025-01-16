/**
 * ****************************
 * 1. Object
 * ****************************
 */
// literal object tuowng minh
let teo={
    name: 'Teo',
    age: 18,
    "my gender": 'M'
}
console.log(teo.name);
console.log(teo["my gender"]);
// UPDATE
teo.name="Ti";
console.log(teo);
// destructure
const {name, age,["my gender"]:gender} = teo;
sayHello(teo);
// destructuring parram
function sayHello({name,age}){
    console.log(`Hello, I'm ${name}, ${age} years old`);
}
// delete key:
delete teo.name;
console.log(teo);


