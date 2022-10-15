/*
Task 2. Tip calculator
You are asked to design an app that enables you to leave a tip. The tip should be
10% of a meal cost. Write a code that shows the total tip to be paid based on the
food price. */

function tipCalculatorTotal(mealCost) {
  return mealCost * 0.1 + mealCost;
}

console.log(tipCalculatorTotal(100));
console.log(tipCalculatorTotal(150));
console.log(tipCalculatorTotal(200));
console.log(tipCalculatorTotal(250));
