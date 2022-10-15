/*
Task 1. Calorie tracking app
You are asked to design a calorie tracking app, which helps users to:
Keep a record of their activities.
Monitor the number of calories they lose when performing the activity.
Sam decides to do cycling 30 minutes everyday for 15 days. Cycling for 30 minutes
burns 225 calories on average. Use console.log to tell Sam how much calories
he would lose:

Great work, Sam! After 0.5 hours of running every day for a week,
you may lose
a total of 3375 calories.
*/

let caloriesPer30mins = 225,
  numberOfDay = 15;
let totalCalories;

totalCalories = caloriesPer30mins * numberOfDay;

console.log(
  `Great work, Sam! After ${
    30 / 60
  } hours of rusunning every day for ${numberOfDay} days, you may lose a total of ${totalCalories} calories.`
);
