const { findHeight, findMinHeight } = require("../../src/yandex-fourth-tasks/splitPaper");

describe("findHeight", () => {
  it("all data in one row", () => {
    let data = [1, 2, 3, 4, 5];

    expect(findHeight(data, 30)).toBe(1);
    expect(findHeight(data, 5 + 4 + 3 + 2 + 1 + 4)).toBe(1);
  });

  it("several rows", () => {
    let data = [1, 2, 3, 4, 5];

    expect(findHeight(data, 5 + 4 + 3 + 2 + 1 + 4 - 1)).toBe(2);
    expect(findHeight(data, 5)).toBe(4);
  });
});

describe("findMinHeight", () => {
  test("yandex example", () => {
    let width = 15;
    let arr1 = [2, 2, 2, 3, 2, 2];
    let arr2 = [3, 3, 5, 2, 4, 3];
  
    let result = findMinHeight(width, arr1, arr2);
  
    expect(result).toBe(3);
  });

  test("min possible width", () => {
    let width = 8;
    let arr1 = [2, 2, 2, 3, 2, 2];
    let arr2 = [3, 3, 5, 2, 4, 3];
  
    let result = findMinHeight(width, arr1, arr2);
  
    expect(result).toBe(6);
  });

  test("max possible width", () => {
    let arr1 = [2, 2, 2, 3, 2, 2];
    let arr2 = [3, 3, 5, 2, 4, 3];
    let width = 100;

    let result = findMinHeight(width, arr1, arr2);
  
    expect(result).toBe(1);
  });

  test("middle width", () => {
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    let arr2 = [7, 6, 5, 4, 3, 2, 1];
    let width = 20;

    let result = findMinHeight(width, arr1, arr2);
  
    expect(result).toBe(4);
  });
 
});
