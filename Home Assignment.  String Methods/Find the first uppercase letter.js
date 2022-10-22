/*
Find the first uppercase letter
The news company needs to find the first uppercase letter in each of their articles.
Create an algorithm which checks a text and finds its first uppercase letter.

Hint
In the text “there is a storm coming to the East of the Philippines”, the result
is “E”.

Hint
In the text “no more rainy days here, sun is about to show up” there are
no upper-case letters. Use console messages to make sure that users
are aware of this fact.
*/

function firstCapitalLetter(string) {
  let re = /[\W_]/g; //filtering non letter

  let filteredString = string.replace(re, ""); //replace re value

  for (let i = 0; i < filteredString.length; i++) {
    if (filteredString[i] === filteredString[i].toUpperCase())
      return console.log(filteredString[i]);
  }
  console.log(`There is no capital letter of the phrases`);
}
//TEST OUTPUT
firstCapitalLetter("there is a storm coming to the East of the Philippines");
firstCapitalLetter("there is a storm coming to the east of the philippineS");
firstCapitalLetter("no more rainy days here, sun is about to show up");
