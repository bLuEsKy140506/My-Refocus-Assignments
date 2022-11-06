const myFunction = {
  sum: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  isNull: "null",
  myObj: {
    name: "Earl Lauriece",
    lastName: "Butlay",
  },
  myArray: ["Earl Lauriece", "Butlay", "web dev"],
  isFalsy: undefined,
  //undefined, false, 0, null
};

function test(a) {
  console.log(a);
}
module.exports = myFunction;
// const test = () => {
//   console.log("hello I am the new method of creating a function");
// };

test("Hello");
