const { minEvenInSequence } = require("../src/min-even-number-in-sequence");

describe("minEvenInSequence", () => {
  it("should return the minimum even number in the sequence", () => {
    // Test case 1: Array with positive even numbers
    expect(minEvenInSequence([2, 4, 6, 8])).toBe(2);

    // Test case 2: Array with mixed positive and negative numbers
    expect(minEvenInSequence([-2, 4, -6, 8])).toBe(-6);

    // Test case 3: Array with no even numbers
    expect(minEvenInSequence([1, 3, 5, 7])).toBe(-1);

    // Test case 4: Empty array
    expect(minEvenInSequence([])).toBe(-1);

    // Test case 5: Array with negative numbers
    expect(minEvenInSequence([-2, -4, -6, -8])).toBe(-8);
  });
});
