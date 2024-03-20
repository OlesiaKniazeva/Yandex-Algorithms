const {
  findSegments,
  processTestData,
} = require("../../src/yandex-second-tasks/findMaxSegment");

describe("findSegments", () => {
  it("should return right data", () => {
    let data = [1, 2, 3, 4, 5];
    let expected = [3, [1, 2, 2]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [1, 3, 3, 3, 2];
    let expected = [3, [1, 3, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [1, 9, 8, 7, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    let expected = [3, [1, 6, 9]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [7, 2, 3, 4, 3, 2, 7];
    let expected = [3, [2, 3, 2]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [7];
    let expected = [1, [1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [7, 6, 5, 4];
    let expected = [1, [4]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [1, 1, 1, 1];
    let expected = [4, [1, 1, 1, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [1, 1, 9, 2, 9, 9, 9, 5, 8];
    let expected = [4, [1, 1, 2, 5]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [10, 9, 9, 10, 3, 4, 1, 8, 2, 7];
    let expected = [5, [4, 2, 1, 2, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [10, 9, 9, 10, 4, 4, 1, 8, 2, 7];
    let expected = [5, [4, 2, 1, 2, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [10, 9, 9, 10, 5, 4, 1, 8, 2, 7];
    let expected = [5, [5, 1, 1, 2, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [10, 10, 10, 1, 5, 8, 4, 8, 9, 8];
    let expected = [4, [3, 1, 4, 2]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [1, 3, 10, 4, 6, 4, 3, 7, 6, 10];
    let expected = [4, [1, 3, 3, 3]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [4, 3, 8, 3, 7, 1, 10, 5, 1, 4];
    let expected = [6, [3, 2, 1, 2, 1, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [5, 2, 5, 5, 10, 10, 10, 1, 6, 3];
    let expected = [4, [2, 5, 1, 2]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [9, 2, 1, 4, 1, 9, 8, 3, 1, 1];
    let expected = [7, [2, 1, 1, 1, 3, 1, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [4, 1, 6, 4, 7, 1, 7];
    let expected = [5, [1, 1, 3, 1, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [2, 2];
    let expected = [1, [2]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });

  it("should return right data", () => {
    let data = [1, 2];
    let expected = [2, [1, 1]];

    let result = findSegments(data);
    console.log(result);
    
    expect(result).toEqual(expected);
  });
});
