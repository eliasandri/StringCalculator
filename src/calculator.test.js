const add = require("./calculator");

it("should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
  expect(add("5")).toBe(5);
})

it("should return sum of two numbers when two numbers are in the string", () => {
  expect(add("1,2")).toBe(3);
})

it("should summerize multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
})

it("should summerize multiple numbers", () => {
  expect(add("1\n2\,3")).toBe(6);
})

it("should throw an exception if input is a negative number", () => {
    expect(add("2,-4,3,-5")).toBe("Negatives not allowed: -4,-5");
  })
