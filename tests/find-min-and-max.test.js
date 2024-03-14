const {
  minAndMax,
  findMin,
  findMax,
  minAndMaxInPair,
} = require("../src/find-min-and-max");

describe("minAndMax", () => {
  it("should return the minimum and maximum values in the array", () => {
    const array = [4, 2, 9, 1, 7];
    const result = minAndMax(array);
    expect(result).toEqual([1, 9]);
  });
});

describe("findMin", () => {
  it("should return the minimum value in the array", () => {
    const array = [4, 2, 9, 1, 7];
    const result = findMin(array);
    expect(result).toEqual(1);
  });
});

describe("findMax", () => {
  it("should return the maximum value in the array", () => {
    const array = [4, 2, 9, 1, 7];
    const result = findMax(array);
    expect(result).toEqual(9);
  });
});

describe("minAndMaxInPair", () => {
  it("should return the minimum and maximum values between two numbers", () => {
    const first = 5;
    const second = 10;
    const result = minAndMaxInPair(first, second);
    expect(result).toEqual([5, 10]);
  });
});
