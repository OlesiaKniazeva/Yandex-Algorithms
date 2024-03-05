const { maxInSequence } = require("../src/max-in-sequence");

describe("maxInSequence", () => {
  it("should return the maximum number in the sequence", () => {
    const sequence = [1, 5, 3, 9, 2];
    const result = maxInSequence(sequence);
    expect(result).toBe(9);
  });

  it("should return the maximum number in the sequence when there are negative numbers", () => {
    const sequence = [-5, -2, -10, -1];
    const result = maxInSequence(sequence);
    expect(result).toBe(-1);
  });

  it("should return the maximum number in the sequence when there are duplicate numbers", () => {
    const sequence = [7, 3, 7, 2, 7];
    const result = maxInSequence(sequence);
    expect(result).toBe(7);
  });

  it("should return undefined for an empty sequence", () => {
    const sequence = [];
    const result = maxInSequence(sequence);
    expect(result).toBeUndefined();
  });

  it("should return the maximum number in the sequence when there are negative and positive numbers", () => {
    const sequence = [0, -5, -2, 42, 10, -10, -1, 0, 24];
    const result = maxInSequence(sequence);
    expect(result).toBe(42);
  });
});
