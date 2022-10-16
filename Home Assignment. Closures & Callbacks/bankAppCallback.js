/*
Task 2. Try another way
Now, try to solve the same task using callbacks.

Create a feature for a bank app that allows users to do 3 things: check their balance
and withdraw or deposit money. It is forbidden to manually modify the balance.
Users can only do it using the 3 rules mentioned above.
Develop a closure to enable this feature.

Hint
Complete the code below to solve the case using a closure.

function createBankAccount(name){
  let balance = 0;
  console.log("...");

  function depositAmount(amount){
  balance = ...
...
*/
// Initialization--------------------------
let balance = 0;
let transactionCounter = 0; // counter is inserted for better visual presentation purposes, and for reference per transaction done.

//----------- MAIN FUNCTION ----------------------------------
function createBankAccount(name, callback, amount = 0) {
  if (callback !== checkBalance) {
    // check if checkbalance function is not pass then proceed to calculation
    callback(name, amount);
  } else {
    checkBalance(name); // if not just check the balance
  }
}

//----------- SECONDARY FUNCTIONS ------------------------

// DEPOSIT FUNCTIONALITY ---------------------------------------------------
function depositAmount(name, amount) {
  ++transactionCounter;
  console.log(
    `${transactionCounter} ----> Mr. ${name} deposited \u20B1${amount}`
  );
  return (balance += amount);
}

// WITHDRAWAL FUNCTIONALITY ----------------------------------------------------
function withdrawAmount(name, amount) {
  if (balance > amount) {
    ++transactionCounter;
    console.log(
      `${transactionCounter} ----> Mr. ${name} withdraw \u20B1${amount}`
    );
    return (balance -= amount);
  } else {
    // You cannot withdraw an amount greater than your current balance
    ++transactionCounter;
    return console.log(
      `${transactionCounter} ----> INSUFFICIENT BALANCE 🥺: The amount try to withdraw is \u20B1${amount} when the balance is only \u20B1${balance}`
    );
  }
}

//CHECK BALANCE FUNCTIONALITY ----------------------------------------------------------------------
function checkBalance(name) {
  ++transactionCounter;
  return console.log(
    `${transactionCounter} ----> The updated balance of Mr. ${name} is \u20B1${balance}`
  );
}

createBankAccount("Earl Lauriece S. Butlay", depositAmount, 200);
createBankAccount("Earl Lauriece S. Butlay", withdrawAmount, 300);
createBankAccount("Earl Lauriece S. Butlay", depositAmount, 200);
createBankAccount("Earl Lauriece S. Butlay", checkBalance);
createBankAccount("Earl Lauriece S. Butlay", withdrawAmount, 300);
createBankAccount("Earl Lauriece S. Butlay", checkBalance);

/* Test output -- from closure
bankAccount1.depositAmount(200); // 200
bankAccount1.withdrawAmount(300); // insufficient fund
bankAccount1.depositAmount(200); // 400
bankAccount1.checkBalance(); // print 400
bankAccount1.withdrawAmount(300); // 100
bankAccount1.checkBalance(); // 100
*/
