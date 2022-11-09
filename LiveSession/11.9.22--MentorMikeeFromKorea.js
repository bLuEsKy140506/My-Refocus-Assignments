////CASE 1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const array_sample = [
//   [1, 2, 3, 6, 12, 6],
//   [4, 5, 10, 6],
//   [7, 55, 8, 9],
//   [55, 34, 89, 100],
// ];

// var maximum = 0;

// for (let i = 0; i < array_sample.length; i++) {
//   for (let j = 0; j < array_sample[i].length; j++) {
//     if (maximum < array_sample[i][j]) { //replace maximum with current item
//       maximum = array_sample[i][j];
//     }
//   }
// }

// console.log("Maximum number is " + maximum);

////CASE 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const student_names = [
//   "Reyes, Mark",
//   "Dela Cruz, Gabby",
//   "Santos, John",
//   "Bartolome, Ana",
// ];

// function print_lastName(student_array) {
//   //console.log("Student last names: ");

//   for (var i = 0; i < student_array.length; i++) {
//     // console.log(student_array[i]);
//     var student = student_array[i];
//     console.log(student.substr(0, student.indexOf(",")));
//   }
// }

// function print_names(student_array) {
//   console.log("Student names:");
//   for (let i = 0; i < student_array.length; i++) {
//     console.log(student_array[i]);
//   }
// }

// substr(starting index, last index - 1)
// ["R", "e", "y", "e", "s", "," ," ", "M", "a", "r", "k"];
//   0    1    2    3    4    5    6    7    8    9    10

//student_names.sort();

//console.log(student_names);

//student_names.push("Garcia, Marie");

// print_names(student_names);

//student_names.sort();

//print_lastName(student_names);

////CASE 3 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
  Use arrays and objects to implement an album store.
  The store should have it's name, location, and a list of albums.
  Each album should have its name and name of the band.

  Implement functions to show the list of albums in the store and add a new album.
*/

// const albumStore = {
//   name: "Astrovision",
//   location: "SM Department Store",
//   albums: [
//     {
//       album_name: "Midnights",
//       band_name: "Taylor Swift",
//     },
//     {
//       album_name: "Leaves",
//       band_name: "Ben&ben",
//     },
//     {
//       album_name: "Coast to Coast",
//       band_name: "Westlife",
//     },
//   ],
//   displayAlbums: function () {
//     for (items of this.albums) {
//       console.log(
//         `Album name: ${items.album_name} || Band name: ${items.band_name}`
//       );
//     }
//   },
//   addAlbums: function (album_name, band_name) {
//     this.albums.push({ album_name: album_name, band_name: band_name });
//   },
// };
// albumStore.addAlbums("Boloy", "Parokya ni Edgar");
// albumStore.addAlbums("Yet to Come", "BTS");
// albumStore.displayAlbums();

////CASE 4 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function createBankAccount(name, checkBalance) {
//   let balance = 1000;

//   function deposit(amount) {
//     if (amount > 0) {
//       balance += amount;
//       console.log(`Hi ${name}!, ${amount} has been deposited in your account`);
//       console.log(`Your new balance is ${balance}`);
//       return balance;
//     } else {
//       console.log("You cannot deposit a negative amount.");
//     }
//   }
//   checkBalance(name, balance);

//   return { checkBalance, deposit };
// }

// function checkBalance(name, balance) {
//   console.log(`Hi ${name}! Your balance is ${balance}`);
// }

// const bank = createBankAccount("Naruto", checkBalance);
// bank.deposit(500);

/*--- PAPA G from COHORT 8 -----
paano po ba ginagamit ang closure in real world application, is it a common practice
sa paggawa ng responsive web-app? kasi in my own humble observation callbacks/listeners ang common.
, if ginagamit po xa, saan po xa pwede i.apply sa frontend or backend side ng webdev?

From Daniel Carreon Banagbanag to Everyone 08:27 PM
maam baka kaya pa.. 
From El Sontellinosa | Cohort 6 to Everyone 08:28 PM
👌
From Papa G | # Cohort 8 to Everyone 08:30 PM
👌
recursion for scientific purpose
From El Sontellinosa | Cohort 6 to Everyone 08:30 PM
calling a function sa loob ng function ata
From Miguel to Everyone 08:30 PM
calling the funtion within its body
From C5 | Anthony to Everyone 08:30 PM
faster runtime
From Papa G | # Cohort 8 to Everyone 08:30 PM
like sorting things and going over a tree
From Miguel to Everyone 08:31 PM
sa interview yata ginagamit kung tanungin ka ng recruiter haha.
From El Sontellinosa | Cohort 6 to Everyone 08:31 PM
sabi din ng isa kong friend na dev, di rin masyadong nagagamit yung recursion
From cohort3 | FRANCE to Everyone 08:31 PM
muntik pa ako macomatose dyan😄
From Kisky | Cohort 3 to Everyone 08:32 PM
buti nalang kasi till now stuck pa ako sa recursion
From Daniel Carreon Banagbanag to Everyone 08:32 PM
maganda din kasi un.. to solve big problem to smaller ones

From Papa G | # Cohort 8 to Everyone 08:38 PM
fun facts: nos of petals in all flowers follow fabonacci nuber
From Jermaigne Sienda cohort11 to Everyone 08:38 PM
ginawa ko yan dati sa c++ tas nag c.out ako ng parang Christmas tree na puro * hahaha
From Refocus | CM Rissy to Everyone 08:38 PM
Nice, Papa G 🌻
From Refocus | Mentor Mikee to Everyone 08:39 PM
snow fractals
From baks to Everyone 08:39 PM
mas nakaka consume po ba ng memory ng pc or local storage ang recursion mentor? as I've notice kasi yung sequence madaming dadaan before mag true ang statement
From Papa G | # Cohort 8 to Everyone 08:39 PM
chaka numbers of groove in the sea shells
From P Lopez | Cohort 8 to Everyone 08:39 PM
nosebleed
From baks to Everyone 08:40 PM
unlike sa for loop lng madami lng haha
From Papa G | # Cohort 8 to Everyone 08:40 PM
last line of defence lang ang recursion. kung di na talaga masolve ng normal na iterative method

*/

////CASE 5 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Fibonnacci sequence
// 0 1 1 2 3 5 8 13 21
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21

// base condition - says when to stop
// recursive condition - line who calls the function

function fibonnacciFunc(num) {
  //num - pang ilan sa sequence yung gusto nating makita
  if (num < 2) return num;
  else {
    return fibonnacciFunc(num - 1) + fibonnacciFunc(num - 2);
    // fibonnacci(2) + fibonnacci(1);
    //     /\        +      1
    // fibonnacci(1) + fibonnacci(0) + 1
    // 1 + 0 + 1 = 2;
  }
}

console.log(fibonnacciFunc(3));
