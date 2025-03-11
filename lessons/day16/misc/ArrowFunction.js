// Type: Function Declaration
function add(a, b) {
    return a + b;
}
// Type: Function Expression
const add2 = function (a, b) {
    return a + b;
}

// type: Arrow Function
const add3 = (a, b) => {
    return a + b;
}
// if 1 parameter, remove()
const arrowAddNumber = a => console.log(a);
// Lexical binding
// Object Literal
const person = {
    name: "Jonh",
    age: 20,
    sayHello: function () {
        /*         setTimeout(function(){
                    console.log(`Hello ${this.name}`);
                },2*1000); */
        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        }, 2 * 1000);
    }
}
person.sayHello();
const array =[1,2,3,4,5];
const odNums = array.filter(num=>num%2!==0)