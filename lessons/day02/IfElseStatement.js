const readline = require('readline-sync');
let expectedTime = 7;
arrivalTime = Number(readline.question('Whats time:'));
let isHeOnTime = (expectedTime== arrivalTime);
// comparison: === : compare typeof variable
// comparison: variable set value
// comparision: variable 
// console.log("71" == 71);


//isHeOntime = boolean
/* if (isHeOnTime) {
    console.log("Let's talk");
} else {
    console.log("Late, please excuse, Write anything...");

}
 */
// toan tu 3 ngoi
let msg = isHeOnTime ? "Let's talk" : "Late, please excuse, Write anything...";
console.log(msg);

s



