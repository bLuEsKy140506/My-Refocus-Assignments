/*====================== MANUAL TESTING ==============================*/

/*Create a new JavaScript file named “bmi_calculator.js.” Inside the file, write
a simple code that calculates a person’s BMI or Body Mass Index
*/
// where weight is in Kg, height in cm
function bmiCalculator(weight, height) {
  let bmi = (weight / ((height * height) / 10000)).toFixed(2); // Fixing up to 2 decimal places
  return Number(bmi); //force to number type
}

// test output MANUAL UNIT TESTING --
console.log(bmiCalculator(58, 154)); //it would be ≈ 24.46 ---> output is 24.46
console.log(bmiCalculator(60, 140)); //it would be ≈ 30.61 ---> output is 30.61
console.log(bmiCalculator(50, 165)); //it would be ≈ 18.37 ---> output is 18.37
console.log(bmiCalculator("60", 152)); //it would be ≈ 25.97 ---> output is 25.97
console.log(bmiCalculator("60", "152")); //it would be ≈ 25.97 ---> output is 25.97

// Dividing as per the bmi conditions
// if (testBMI < 18.6) console.log(`Under Weight :${testBMI}`);
// else if (testBMI >= 18.6 && testBMI < 24.9) console.log(`Normal :${testBMI}`);
// else console.log(`Overweight :${testBMI}`);
