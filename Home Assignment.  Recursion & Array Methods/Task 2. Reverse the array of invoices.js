/*
Task 2. Reverse the array of invoices
You work as a Web Developer at a big company. The invoicing department
is having a hard time sorting their documents using the “first in, first out” method.
The “first in, first out” method means that the invoices that came the earliest
must be also paid earlier than the others.

Use array methods to create two recursive functions:
insertToBottom, which adds invoices at the bottom of the list
reverseStack, which reverses the order of the invoices

Hint

The result of calling the first function should look like this string:

Invoice 008 Invoice 007 Invoice 006 Invoice 005 Invoice 004 Invoice 003
Invoice 002 Invoice 001

Hint

The result of calling the second function should look like this string:

Invoice 008 Invoice 007 Invoice 006 Invoice 005 Invoice 004 Invoice 003
Invoice 002 Invoice 001

Hint
Complete the code below to solve the case.

 InvoiceList = [
 "Invoice 008", 
 "Invoice 007", 
 "Invoice 006",
 "Invoice 005"];

 insertToBottom() {
 ...
}
 reverseList() {
 ...

}

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");

console.log(InvoiceList.join(" "));
reverseList();
console.log(InvoiceList.join(" ")); 
*/

InvoiceList = [
  "Invoice 008",
  "Invoice 037",
  "Invoice 106",
  "Invoice 005",
  "Invoice 203",
  "Invoice 103", // for testing
];

const objectBinder = {};

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");
InvoiceList.push("Invoice 108"); // for testing

console.log("UNSORTED");
console.log(InvoiceList.join(" "));

insertToBottom();

console.log("\nSORTED");
console.log(InvoiceList.join(" "));

reverseList();

console.log("\nREVERSED");
console.log(InvoiceList.join(" "));

/*
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                           FUNCTION DEFINITION
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

//insertToBottom() ----> which adds invoices at the bottom of the list
/* MSG TO MENTOR ---> Sir, honestly I don't get this logic, when we can just directly state this code below:

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");

*/
// The content of this function directly answer what being ask in the statement below. Sorting documents using first in, first out” method.

// You work as a Web Developer at a big company. The invoicing department
// is having a hard time sorting their documents using the “first in, first out” method.
// The “first in, first out” method means that the invoices that came the earliest
// must be also paid earlier than the others.

// As per my observation in real life, logically speaking the invoice receipt number reflect the chronological order it was processed
// for example we can say that Invoice 001 is the earliest and Invoice 999 would the latest on the invoice receipt.
function insertToBottom() {
  InvoiceList.forEach((element) => {
    let numericValue;
    let re = /\D/g; // determine non-digit character
    numericValue = Number(element.replace(re, "")); // extract the number and assigned to object KEY.
    objectBinder[numericValue] = element; //to object container
  });
  //as per observation --- using forEach method then dynamically add each element(key,value) to an empty object
  //the end result is automatically sorted (like this, sorted from least to greatest)

  /* MSG to MENTOR --> Sir why this happened? */

  //console.log(objectBinder);

  const correctList = []; //store the just the values to an temporary array, since its already arrange automatically
  for (const items of Object.values(objectBinder)) {
    correctList.push(items);
  }

  InvoiceList = correctList; //overwriting the invoiceList, just to follow the hint provided ^_^.
}

//reverseStack() ---> which reverses the order of the invoices

function reverseList() {
  InvoiceList.reverse();
}
