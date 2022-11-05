/*====================== AUTOMATED TESTING ==============================*/

const bmiCal = require("./bmi_calculator"); // importing

//console.log(bmiCal(60, 140));
//this concept was copied from https://www.w3resource.com/jest/introduction.php
const cases = [
  [60, 140, 30.61], //where cases[nth][0] ==> weight, cases[nth][1] ==> height(cm), cases[nth][2] ==> bmi
  [58, 154, 24.46],
  [50, 165, 18.37],
  [60, 152, 25.97],
];

describe("Testing multiple BMI scenarios at once", () => {
  test.each(cases)("Check if it is equal to BMI", (weight, height, bmi) => {
    expect(bmiCal(weight, height)).toEqual(bmi);
  });
});
