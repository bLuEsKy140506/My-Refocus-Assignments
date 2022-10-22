/* Task 1. Find the most used item on the array
You have an array with some repeated elements. For example, the element
“Web Developer” is repeated 3 times below.
const arr = [

 "Web Developer",
 "Refocus",
 "Web Developer",
 "Web Developer",
 "Refocus",
 "Awesome",
];

Create an algorithm that counts the number of times each element is repeated
and shows the result using the console.

Hint

The result should look like this object:
{ Web Developer': 3, Refocus: 2, Awesome: 1 }

*/

const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

const uniqueItems = [...new Set(arr)]; //first determine the unique items
//console.log(uniqueItems);

const storageObject = {}; // we create since the required format is { Web Developer': 3, Refocus: 2, Awesome: 1 }

uniqueItems.forEach(function (item) {
  let count = 0; // initial value of each unique item

  arr.forEach(function (value) {
    // then evalute the unique item into original array
    if (item === value) {
      count += 1; //if found then count + 1;
    }
    return count;
  });
  storageObject[item] = count; //then create the unique item as a key and the count as a property
});

console.log(storageObject);
