const { findProgressionNumber, findRationalNumber } = require("../../src/yandex-fourth-tasks/getFractionFromSequence");

describe("findProgressionNumber", () => {
  it("should return the correct progression number for a given input", () => {
    expect(findProgressionNumber(2n)).toBe(1n);
    expect(findProgressionNumber(3n)).toBe(1n);
    expect(findProgressionNumber(4n)).toBe(2n);
    expect(findProgressionNumber(5n)).toBe(2n);
    expect(findProgressionNumber(6n)).toBe(2n);
    expect(findProgressionNumber(7n)).toBe(3n);
    expect(findProgressionNumber(8n)).toBe(3n);
    expect(findProgressionNumber(9n)).toBe(3n);
    expect(findProgressionNumber(10n)).toBe(3n);
    expect(findProgressionNumber(11n)).toBe(4n);
    expect(findProgressionNumber(10n**18n)).toBe(1414213561n);
  });
});

describe('findRationalNumber', () => {
  expect(findRationalNumber(1n)).toEqual([1, 1]);
  expect(findRationalNumber(2n)).toEqual([2, 1]);
  expect(findRationalNumber(3n)).toEqual([1, 2]);
  expect(findRationalNumber(4n)).toEqual([1, 3]);
  expect(findRationalNumber(6n)).toEqual([3, 1]);
  expect(findRationalNumber(18n)).toEqual([4, 3]);
})
