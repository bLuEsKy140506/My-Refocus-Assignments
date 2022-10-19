function createBankAccount(name, checkBalance) {
  let balance = 50000;

  function deposit(amount) {
    balance += amount;
    console.log(
      "Hi " + name + "! " + amount + " has been deposited in yor account."
    );
    console.log("Yor new balance is " + balance);
  }

  checkBalance(name, balance);

  /* this happened during the live session  ---> we didn't notice that there too much spaces in return keyword and inside the curly braces.
  return
  {
    checkBalance, deposit;
  };
  */
  return { checkBalance, deposit };
}

function checkBalance(name, balance) {
  console.log("Hi " + name + "! Your balance is " + balance);
}

const bank1 = createBankAccount("Clem", checkBalance);
bank1.deposit(500);
