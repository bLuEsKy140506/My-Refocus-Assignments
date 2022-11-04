//Manual Test

function calculator(a, b) {
  function sum() {
    return a + b;
  }

  function minus() {
    return a - b;
  }

  function multiply() {
    return a * b;
  }

  return {
    sum,
    minus,
    multiply,
  };
}
//Perform by human discretion and by the help of a calculator (validator)

console.log(calculator(1, 2).sum()); //it would be 3 --- output is 3
console.log(calculator(1, 2).minus()); //it would be -1 --- output is -1
console.log(calculator(1, 2).multiply()); //it would be 2 --- output is 2
console.log(calculator("1", 2).sum()); //it would be 3 --- output is "12"
//console.log(typeof calculator("1", 2).sum());
console.log(calculator("1", 2).minus()); //it would be -1 -- output is -1
console.log(calculator("1", 2).multiply()); //it would be 2 -- output is 2
