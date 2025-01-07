/**
 * ****************************
 * Get input from user about height (m) and weight (kg), then calculate BMI
 *
 * BMI Categories:
 * Underweight: <18.5
 * Normal weight: 18.5 – 24.9
 * Overweight: 25–29.9
 * Obesity: BMI of 30 or greater
 * BMI = weight / (height x height)
 * ****************************
 */



const readline = require('readline-sync');

let height = Number(readline.question('Your height (m): '));
let weight = Number(readline.question('Your weight (kg): '));

// check input
if (height <= 0 || weight <= 0) {
    console.log("Height and weight must be greater than 0.");
} else {

    //  BMI
    let BMI = weight / (height * height);
    console.log(`BMI is: ${BMI.toFixed(2)}`);

    // check
    if (BMI < 18.5) {
        // console.log("Underweight");
        console.log(`/tUnderweight with BMI:${(BMI).toFixed(2)} need increase to ${(BMI+2).toFixed(2)}`);
        
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("Normal weight");
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log("Overweight");
    } else if (BMI >= 30) {
        console.log("Obesity");
    } else {
        console.log("This value is not real");
    }
}