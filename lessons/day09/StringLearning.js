let myString = `                    'Day la chu trong \"nhay don\" `;
console.log(myString);

// Length
console.log(myString.length);

// charArt
console.log(myString.charAt(0));

// Print each character
for (let index = 0; index < myString.length; index++) {
//   console.log(myString.charAt(index));
}

// eliminate spaces
let trimStr = myString.trim();
console.log(trimStr);

// hint: Em phai hi sinh -> remove m
let targetStr = "tWomi amay gmap mmhhamu 7WH";
// REGEX
let decode4Str = targetStr.replace(/m/gi, "");
console.log(decode4Str);

let uiStr = "280mins";
let uiStrWithNum = uiStr.replace(/[^0-9]/g, "");
console.log(Number(uiStrWithNum) + 1);

// +, concat() - concatenating
let firstString = "Hello";
let secondString = ", tui ten teo";
let combine4Str = firstString.concat(secondString).concat("!") + "!";
console.log(combine4Str);
// substring
let strToBeCut ="https://www.google.com";
let startIndex = 0;
let endIndex = 0;
let substringStr = strToBeCut.substring(startIndex, endIndex);
console.log(substringStr);
console.log(strToBeCut.split("://")[0]);
console.log(strToBeCut.split("://")[1]);
console.log(strToBeCut.split("://"));