/*Create a new JavaScript file named “bmi_calculator.js.” Inside the file, write
a simple code that calculates a person’s BMI or Body Mass Index
*/
// where weight is in Kg, height in cm
function bmiCalculator(weight, height) {
  // Fixing upto 2 decimal places
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  return bmi;
}

// test output  ddd

let testBMI = bmiCalculator(58, 154);

// Dividing as per the bmi conditions
if (testBMI < 18.6) console.log(`Under Weight :${testBMI}`);
else if (testBMI >= 18.6 && testBMI < 24.9) console.log(`Normal :${testBMI}`);
else console.log(`Overweight :${testBMI}`);
