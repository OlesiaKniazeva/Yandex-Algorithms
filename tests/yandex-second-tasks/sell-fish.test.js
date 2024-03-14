const {
  findIncomeFromSell,
  findMinAndMaxIncreasing,
} = require("../../src/yandex-second-tasks/sell-fish");

describe("findMinAndMaxIncreasing", () => {
  it("no increasing", () => {
    let array = [5, 3, 2, 1];
    expect(findMinAndMaxIncreasing(array, 0, array.length)).toEqual(-1 - 1);
  });

  it("increasing", () => {
    let array = [6, 1, 3, 6, 9];
    expect(findMinAndMaxIncreasing(array, 0, array.length)).toEqual(9 - 1);
  });

  it("increasing, with several options", () => {
    let array = [8, 3, 18, 6, 9, 1, 5, 29];
    expect(findMinAndMaxIncreasing(array, 0, array.length)).toEqual(29 - 1);
  });

  it("increasing", () => {
    let array = [8, 3, 38, 6, 9, 19, 5, 1, 10, 34];
    expect(findMinAndMaxIncreasing(array, 0, array.length)).toEqual(38 - 3);
  });

  it("increasing, second range bigger", () => {
    let array = [8, 3, 38, 6, 9, 19, 5, 1, 10, 39];
    expect(findMinAndMaxIncreasing(array, 0, array.length)).toEqual(39 - 1);
  });
});

describe("findIncomeFromSell", () => {
  it("find increasing difference, validity more then days", () => {
    const daysToSell = 5;
    const validityDays = 6;
    const priceList = [2, 8, 3, 1, 10];
    const expected = 9;
    expect(findIncomeFromSell(daysToSell, validityDays, priceList)).toBe(
      expected
    );
  });

  it("find no difference, validity more then days", () => {
    const daysToSell = 5;
    const validityDays = 6;
    const priceList = [10, 8, 6, 5, 1];
    const expected = 0;
    expect(findIncomeFromSell(daysToSell, validityDays, priceList)).toBe(
      expected
    );
  });

  it("find difference, it appears late in a sequence, validity more then days", () => {
    const daysToSell = 5;
    const validityDays = 6;
    const priceList = [10, 8, 6, 1, 6];
    const expected = 5;
    expect(findIncomeFromSell(daysToSell, validityDays, priceList)).toBe(
      expected
    );
  });

  it("should calculate the maximum income from selling fish", () => {
    const daysToSell = 5;
    const validityDays = 2;
    const priceList = [1, 2, 3, 4, 5];
    const expected = 2;
    expect(findIncomeFromSell(daysToSell, validityDays, priceList)).toBe(
      expected
    );
  });

  it("no maximum option", () => {
    const daysToSell = 5;
    const validityDays = 2;
    const priceList = [5, 4, 3, 2, 1];
    const expected = 0;
    expect(findIncomeFromSell(daysToSell, validityDays, priceList)).toBe(
      expected
    );
  });

  it("no maximum option", () => {
    const daysToSell = 10;
    const validityDays = 2;
    const priceList = [5, 23, 12, 1, 34, 46, 21, 1, 10, 12];
    const expected = 45;
    expect(findIncomeFromSell(daysToSell, validityDays, priceList)).toBe(
      expected
    );
  });

  it("test", () => {
    const daysToSell = 10;
    const validityDays = 10;
    const priceList = [6, 7, 5, 5, 10, 10, 1, 8, 5, 10];
    const expected = 9;
    expect(findIncomeFromSell(daysToSell, validityDays, priceList)).toBe(
      expected
    );
  });
});
