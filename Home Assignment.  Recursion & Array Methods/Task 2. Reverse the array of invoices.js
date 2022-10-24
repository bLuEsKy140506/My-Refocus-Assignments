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

*/
/* ############################ ADDITIONAL HINT BY MENTOR BY Jian Jaico Cajita #####################
Thanks for your submission for Home Assignment. Recursion & Array Methods in Web Developer. It didn’t quite meet the requirements for this assignment. Let’s give it another go!

I'll answer your questions:
1. Sir, honestly I don't get this logic, when we can just directly state this code below:
 - The array push method yes you are right, but however the task description said 
   that we need to add recursive functionalities within this functions. 
    So that is why you need to make a 
 ----> same flow of an array.push but your own code <-----

2. Sir why this happened?
- The forEach method of array is actually runs same as a for loop. 
forEach method will loop through your elements, however in your code you put the 
result in a temporary object then push it again in an array. 
This will take too long, not really suitable logic/algorithm. 
----->Aslo in the reverseStack function you also need to make it a recursive function.<------

I know it is too much, but we will breakdown how we can achieve this assignment. Just message me.
###################################################################################################### 
*/

let InvoiceList = [
  "Invoice 008",
  "Invoice 007",
  "Invoice 006",
  "Invoice 005", // for testing
];

insertToBottom(InvoiceList)("Invoice 004"); //This will be equivalent to InvoiceList.push("Invoice 004");
insertToBottom(InvoiceList)("Invoice 003"); //This will be equivalent to InvoiceList.push("Invoice 003");
insertToBottom(InvoiceList)("Invoice 002"); //This will be equivalent to InvoiceList.push("Invoice 002");
insertToBottom(InvoiceList)("Invoice 001"); //This will be equivalent to InvoiceList.push("Invoice 001");

console.log(InvoiceList.join(" "));

console.log(reverseStack(InvoiceList).join(" ")); //This will be equivalent to InvoiceList.reverse();

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                           FUNCTION DEFINITION
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

//insertToBottom() ----> which adds invoices at the bottom of the list

//console.log(InvoiceList[6]);
function insertToBottom(array) {
  let len = 0;
  function ePushMoTe(element) {
    //RECURSION FUNCTIONALITY ----
    if (array[len] === undefined) array[len] = element;
    //base of the recursion, it will stop when we reach undefined
    else {
      len += 1; //increment
      return ePushMoTe(element); //recurse
    }
  }
  return ePushMoTe;
}

// //reverseStack() ---> which reverses the order of the invoices

function reverseStack(list) {
  // RECURSION FUNCTIONALITY ------------------------
  if (list.length === 0) return list; //recursion base (its stop when the length of list is 0)
  return reverseStack(list.slice(1)).concat(list[0]); //recurse (slice 1st position (1 length) then concatenate it the last part)
}

//console.log(InvoiceList); //the array doesn't mutate/change
//const reversed = reverseStack(InvoiceList); //but it can be store in a variable array
//console.log(reversed.join(" "));//display
