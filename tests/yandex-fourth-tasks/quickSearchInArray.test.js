const {
  searchData,
  getInput,
} = require("../../src/yandex-fourth-tasks/quickSearchInArray");

describe("searchData", () => {
  it("", () => {
    let data = ["-1", "2 6", "1", "1 10"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(2)
  });

  it("", () => {
    let data = ["-1", "6 6 6 2 6", "1", "1 10"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(5)
  });

  it("", () => {
    let data = ["-1", "6 6 6 2 6", "1", "1 2"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(1)
  });

  it("", () => {
    let data = ["-1", "6 6 6 2 6", "1", "4 9"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(4)
  });

  it("", () => {
    let data = ["-1", "6 6 6 2 6", "1", "8 9"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(0)
  });

  it("", () => {
    let data = ["-1", "6 6 6 8 6 9 5 5", "1", "1 3"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(0)
  });

  it("", () => {
    let data = ["-1", "6 6 6 8 6 9 5 5", "1", "6 7"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(4)
  });

  it("", () => {
    let data = ["-1", "10 1 10 3 4", "1", "1 10"];

    let [uniqueArray, cumulativeCountArray, minMax] = getInput(data);
    console.log("uniqueArray: ", uniqueArray);
    console.log('cumulativeCountArray:', cumulativeCountArray);
    console.log('minMax:', minMax);

    expect(searchData(uniqueArray, cumulativeCountArray, minMax[0])).toBe(5)
  });

});
