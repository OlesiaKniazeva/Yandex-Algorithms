const { sumOfSequence } = require("../src/sum-of-sequence");

test("sumOfSequence should return the sum of all numbers in the array", () => {
  const array = [1, 2, 3, 4, 5];
  const expectedSum = 15;
  const result = sumOfSequence(array);
  expect(result).toBe(expectedSum);
});

test("sumOfSequence should return 0 for an empty array", () => {
  const array = [];
  const expectedSum = 0;
  const result = sumOfSequence(array);
  expect(result).toBe(expectedSum);
});

test("sumOfSequence should return the same number for an array with a single element", () => {
  const array = [10];
  const expectedSum = 10;
  const result = sumOfSequence(array);
  expect(result).toBe(expectedSum);
});

test("sumOfSequence should return the sum of negative numbers in the array", () => {
  const array = [-1, -2, -3, -4, -5];
  const expectedSum = -15;
  const result = sumOfSequence(array);
  expect(result).toBe(expectedSum);
});
