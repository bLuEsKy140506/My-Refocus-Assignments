/* Task 2. Saving app
You are now working on a finance app that helps users save money. To encourage
users to continue saving, you are adding a feature to show how much money they
have already saved.
Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500. Use
console.log and variables to output the following in JavaScript:
“Thank you for your discipline and hardwork, Sam! You are now 25% away from
your goal of saving ₱10,000.” */

let currentSaving = 7500,
  goalSaving = 10000;
let percentAway;

percentAway = (goalSaving - currentSaving) / goalSaving;

console.log(
  `Thank you for your discipline and hardwork, Sam! You are now ${
    percentAway * 100
  }% away from your goal of saving P${goalSaving}`
);
