
/**
 * ****************************
 * Get input from user about height(m) and weight(kg) then calculate BMI

    Underweight: <18.5
    Normal weight: 18.5 – 24.9
    Overweight: 25–29.9
    Obesity: BMI of 30 or greater
    BMI = weight / (height x height)
 * ****************************
 */

const readline = require('readline-sync');
let heigh = Number(readline.question('Your heigh:'));
let weight = Number(readline.question('Your weight:'));
let BMI = Math.round(weight / (heigh * heigh));
console.log(`BMI is: ${BMI}`);
if (heigh==0 ||weight==0){
    console.log("DO not accept heigh or weight =0 or either");
    
}

if (BMI < 18.5) {
    console.log("Underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight");
}else if (BMI >=25 && BMI <= 29.9){
    console.log("Overweight");
} else if (BMI >=30){
    console.log("Obesity");
}else{
    console.log("This value is not real");
    
}

