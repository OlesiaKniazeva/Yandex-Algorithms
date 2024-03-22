const {
  findRepeated,
} = require("../../src/yandex-third-tasks/findRepeatedData");

describe("findRepeated", () => {
  it("no repeates", () => {
    const firstArray = [1, 2, 3, 4, 5];
    const secondArray = [4, 5, 6, 7, 8];
    const thirdArray = [5, 6, 7, 8, 9];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([4, 5, 6, 7, 8]);
  });

  it("should return an empty array if no repeated elements are found", () => {
    const firstArray = [1, 2, 3, 4, 5];
    const secondArray = [6, 7, 8, 9, 10];
    const thirdArray = [11, 12, 13, 14, 15];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([]);
  });

  it("all the same", () => {
    const firstArray = [1, 2, 3];
    const secondArray = [3, 2, 1];
    const thirdArray = [2, 3, 1];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3]);
  });

  it("2 the same", () => {
    const firstArray = [1, 2, 3, 6];
    const secondArray = [3, 2, 1];
    const thirdArray = [2, 3, 1];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3]);
  });

  it("2 the same", () => {
    const firstArray = [1, 2, 3];
    const secondArray = [3, 2, 1, 8];
    const thirdArray = [2, 3, 1];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3]);
  });

  it("2 the same", () => {
    const firstArray = [1, 2, 3];
    const secondArray = [3, 2, 1];
    const thirdArray = [2, 3, 1, 9];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3]);
  });

  it("2 the same, repeated data", () => {
    const firstArray = [1, 2, 3, 3, 3, 2, 1, 2];
    const secondArray = [3, 2, 1, 3, 2, 1, 1, 3];
    const thirdArray = [2, 3, 1, 9, 3, 2, 1];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3]);
  });

  it("repeated data", () => {
    const firstArray = [1, 2, 3, 3, 3, 2, 3, 7, 77, 1, 2];
    const secondArray = [3, 2, 1, 3, 7, 2, 1, 1, 3];
    const thirdArray = [2, 3, 1, 9, 3, 2, 1];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3, 7]);
  });

  it("no same, repeated data", () => {
    const firstArray = [3, 1, 4, 4, 44, 1, 2, 6, 2, 1, 3];
    const secondArray = [1, 3, 1, 1, 1, 2, 5, 6, 4, 4, 1, 4];
    const thirdArray = [1, 2, 6, 2, 2, 4, 44, 4, 1, 44, 6, 2, 3, 3, 3];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3, 4, 6, 44]);
  });

  it("repeated data", () => {
    const firstArray = [3, 1, 4, 4, 44, 1, 2, 6, 2, 1, 3];
    const secondArray = [1, 3, 1, 11, 1, 1, 2, 5, 6, 4, 4, 1, 4];
    const thirdArray = [1, 2, 6, 2, 11, 2, 4, 44, 4, 1, 44, 6, 2, 3, 3, 3];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([1, 2, 3, 4, 6, 11, 44]);
  });

  it("same, repeated data", () => {
    const firstArray = [3];
    const secondArray = [3, 3];
    const thirdArray = [3, 3, 3];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([3]);
  });

  it("last two same data, the first to same size, repeated data", () => {
    const firstArray = [3, 2, 22, 3, 2, 1];
    const secondArray = [33, 22, 44, 22, 33, 44];
    const thirdArray = [22, 22, 44, 44, 44, 33];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([22, 33, 44]);
  });

  it("same size differen data for all", () => {
    const firstArray = [1, 2, 3];
    const secondArray = [2, 3, 4];
    const thirdArray = [3, 4, 5, 5];

    const result = findRepeated(firstArray, secondArray, thirdArray);

    expect(result).toEqual([2, 3, 4]);
  });
});
