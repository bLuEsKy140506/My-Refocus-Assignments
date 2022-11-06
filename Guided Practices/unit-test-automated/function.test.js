// test("Check if statement is true", () => {
//   var status = false;
//   expect(status).toBe(true);
// });

const myFunctions = require("./function");

test("Check if 1 + 2 equals to 3", () => {
  expect(myFunctions.sum(1, 2)).toBe(3);
});
// module.exports = myFunction;
test("Check if not null", () => {
  expect(myFunctions.isNull).not.toBeNull();
});

test("If my object is complete", () => {
  expect(myFunctions.myObj).toEqual({
    name: "Earl Lauriece",
    lastName: "Butlay",
    //toBe
    //only check TRUE, STRING, NUMBER -- an absolute value
  });
});

test("If my array is complete", () => {
  expect(myFunctions.myArray).toEqual(["Earl Lauriece", "Butlay", "web dev"]);
});

test("If my array has an array", () => {
  expect(myFunctions.myArray).toContain("web dev");
});

test("If a falsy value", () => {
  expect(myFunctions.isFalsy).toBeFalsy();
});
