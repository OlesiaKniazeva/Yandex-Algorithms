const {
  putSignsInExpression,
} = require("../../src/yandex-first-tasks/put-signs-in-expression");

describe("putSignsInExpression", () => {
  it("should return right expression", () => {
    let numSequence1 = [5, 7, 2];
    let expectedResults = ["x+", "+x"];

    let result = putSignsInExpression(numSequence1);
    expect(expectedResults).toContain(result);
  });

  it("should return right expression", () => {
    let numSequence1 = [5, 7, 3];
    let expectedResults = ["x+", "xx", "++"];

    let result = putSignsInExpression(numSequence1);
    expect(expectedResults).toContain(result);
  });

  it("should return right expression if below zero", () => {
    let numSequence1 = [4, -5];
    let expected1 = "+";

    let result = putSignsInExpression(numSequence1);
    expect(result).toEqual(expected1);
  });

  it("should return right expression if odd in the middle", () => {
    let numSequence1 = [4, 1, 2];
    let expected1 = "++";

    let result = putSignsInExpression(numSequence1);
    expect(result).toEqual(expected1);
  });

  it("should return right expression if long expression, even last", () => {
    let numSequence1 = [4, 1, 2, 6, 4, 5];
    let expected1 = "++++x";

    let result = putSignsInExpression(numSequence1);
    expect(result).toEqual(expected1);
  });

  it("should return right expression if long expression, even first", () => {
    let numSequence1 = [1, 1, 2, 6, 7, 0];
    let expected1 = "+++++";

    let result = putSignsInExpression(numSequence1);
    expect(result).toEqual(expected1);
  });

  it("should return right expression if long expression, even middle", () => {
    let numSequence1 = [2, 6, 9, 6, 8, 0];
    let expected1 = "+++++";

    let result = putSignsInExpression(numSequence1);
    expect(result).toEqual(expected1);
  });

  it("should return right expression if long expression, even middle, after also even", () => {
    let numSequence1 = [2, 6, 9, 3, 8, 0];
    let expected1 = "++x++";

    let result = putSignsInExpression(numSequence1);
    expect(result).toEqual(expected1);
  });

  it("should return right expression two even", () => {
    let numSequence1 = [-7, 9];
    let expected1 = "x";

    let result = putSignsInExpression(numSequence1);
    expect(result).toEqual(expected1);
  });
});
