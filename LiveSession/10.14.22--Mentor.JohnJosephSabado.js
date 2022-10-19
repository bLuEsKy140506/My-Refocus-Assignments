/* CASE#1----------------CPA Calculator-------
Develop a grading calculator for university professors.
It should compute the average point of a group of students
and determine the corresponding grade.

Student Name    Points -------------  Range    Grade
Tony Stark       80                   91-100     A
Bruce Banner     77                   81-90      B
Thor Odinson     88                   71-80      C
Steven Rogers    95                   61-70      D
Marc Spector     68                   <60        F
*/
//CONCEPT USED --- ARRAY, CONDITIONAL, LOOP
console.log("* CASE#1----------------CPA Calculator-------\n");
var students = [
  // list of students and grades
  ["Tony Stark", 80],
  ["Bruce Barner", 77],
  ["Thor Odinson", 88],
  ["Steven Rogers", 95],
  ["Marc Spector", 68],
];

var avgMarks = 0; // Set 0 as an initial value

for (var i = 0; i < students.length; i++) {
  avgMarks += students[i][1]; // Adding of grades
  console.log(`${students[i][0]} ${students[i][1]}`);
}
console.log(`Total --- > ${avgMarks} | length ---> ${students.length}`);
let avg = avgMarks / students.length;

console.log(`Average grade: ${avg}`);

if (avg < 60) {
  console.log("Grade: F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg >= 91) {
  console.log("Grade : A");
}
console.log("\nCASE#1----------------end CPA Calculator-------\n");
/* CASE#2-----------------PALINDROME STRINGS--------
Write a code that checks if a string is a palindrome.
If it is a palindrome, display the message:
"Yes, the string ${string} is a palindrome".
Otherwise, display the message:
"No, this is not a palindrome"
*/

// APPROACH#1 -- USING MODERN STRING METHODS.
console.log("\nCASE#2----------------PALINDROM STRINGS / APPROACH#1-------\n");
function palindrome(string) {
  let re = /[\W_]/g; //used to find the none word character;
  let lowRegStr = string.toLowerCase().replace(re, ""); //replace re value

  let reverseStr = lowRegStr.split("").reverse().join(""); // this is a built-in string method
  //first --> split the string into array of single string
  //second --> reverse built-in method which reverse the order of the array elements
  //third -- > join the array element into 1 string
  //fourth --> strong into a variable called reverseStr

  return reverseStr === lowRegStr
    ? console.log(`Yes, the string ${string} is a palindrome.`)
    : console.log(`No, this is not a PALINDROME`); // checking if it is equal
}

palindrome("Madam");
console.log("\nCASE#2----------------PALINDROM STRINGS / APPROACH#2-------\n");

// APPROACH#2 -- USING MANUAL EVALUATION OF ARRAY ELEMENTS
// Algorithm used -- > match the first element to the last elements, 2nd element to second last and so forth until we reach to the middle.
function palindrome2(string) {
  let re = /[\W_]/g; //used to find the none word character;
  let lowRegStr = string.toLowerCase().replace(re, ""); //replace re value

  var len = lowRegStr.length;
  var result = true;

  //for (var i = 0; i < len; i++) {
  for (var i = 0; i < len / 2; i++) {
    //for me, to make it more efficient this len variable should be divided 2
    // console.log(
    //   `${lowRegStr[i]} ${i} --- ${lowRegStr[len - 1 - i]} ${len - 1 - i}`
    // );
    if (lowRegStr[i] !== lowRegStr[len - 1 - i]) {
      result = false;
    }
  }

  return result
    ? console.log(`Yes, the string ${string} is a palindrome.`)
    : console.log(`No, this is not a PALINDROME`); // checking if it is equ
}

palindrome2("Madfam");

console.log("\nCASE#2----------------end PALINDROM STRINGS-------\n");

/* CASE#3-----------------HOW MANY DAYS ARE THERE IN A MONTH--------
Create a function that counts the number of days there
are in a month. The input is the month. For example, it's "3",
for March. The output here is "31" because thee are 31 days in March.

Include the leap year in counting. For example, if a user
inputs the month of 2 and the year 2016, the date count should
be 29 because there are 29 days in February in a leap year.
*/

console.log(
  "\nCASE#3----------------HOW MANY DAYS ARE THERE IN A MONTH-------\n"
);
function isLeapyear(year) {
  return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0; // standard rule to calculate if the year is a leap year
}

//console.log(isLeapyear(2016));

function findDaysinMonth(month, year) {
  if (month < 1 || month > 12) {
    //restrict wrong input
    console.log("Invalid Month Value" + month);
  }

  if (month == 2) {
    //1st if is for february
    if (isLeapyear(year)) {
      console.log("The month has 29 days");
    } else {
      console.log("The month has 28 days.");
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("The month has 30 days."); //2nd if for April, June, September, November
  } else {
    console.log("The month has 31 days"); //else would fall into 31 days
  }
}

findDaysinMonth(2, 2016);
console.log(
  "\nCASE#3----------------end HOW MANY DAYS ARE THERE IN A MONTH-------\n"
);

console.log("\nCASE#4----------------INTEGERS SUMMATION-------\n");
/* CASE#4-----------------INTEGERS SUMMATION--------
Create a function that finds the summation of each
number from 1 to any given number. The numbers
are only positive integers greater than 0.
*/

let num = 10; // Input number

function numberSum(num) {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    total += i;
    console.log(`${i} -- ${total}`);
  }

  return console.log(total);
}

numberSum(num);

console.log("\nCASE#4----------------end INTEGERS SUMMATION-------\n");
