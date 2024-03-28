const {
  getInput,
  processData,
} = require("../../src/yandex-fourth-tasks/regiments");

describe("processData", () => {
  it("should return the correct result for a given input", () => {
    let testData = ["5 2", "1 3 5 7 9", "2 4", "1 3"];
    let [regimentsAmount, soldiersAmounts, dataSets] = getInput(testData);

    let result = processData(regimentsAmount, soldiersAmounts, dataSets);

    expect(result).toEqual([1, 2]);
  });

  it("should return the correct result for a given input", () => {
    let testData = ["5 2", "1 3 5 7 9", "2 5", "1 30"];
    let [regimentsAmount, soldiersAmounts, dataSets] = getInput(testData);

    let result = processData(regimentsAmount, soldiersAmounts, dataSets);

    expect(result).toEqual([-1, -1]);
  });

  it("should return the correct result for a given input", () => {
    let testData = ["5 2", "1 3 5 7 9", "5 25", "5 30"];
    let [regimentsAmount, soldiersAmounts, dataSets] = getInput(testData);

    let result = processData(regimentsAmount, soldiersAmounts, dataSets);

    expect(result).toEqual([1, -1]);
  });

  it("should return the correct result for a given input", () => {
    let testData = ["5 1", "1 3 5 7 9", "5 1"];
    let [regimentsAmount, soldiersAmounts, dataSets] = getInput(testData);

    let result = processData(regimentsAmount, soldiersAmounts, dataSets);

    expect(result).toEqual([-1]);
  });

  it("should return the correct result for a given input", () => {
    let bigData = [];
    bigData.push(10**9 - 4);
    bigData.push(10**9 - 3);
    bigData.push(10**9 - 2);
    bigData.push(10**9 - 1);
    bigData.push(10**9);
    let stringBigData = bigData.join(' ');
    console.log('stringBigData', stringBigData);
    

    let big = [ 999999996n, 999999997n, 999999998n, 999999999n, 1000000000n ];
    let sum = big.reduce((a, b) => a + b, 0n);
    
    let testData = ["5 3", stringBigData, "1 1000000000", `5 ${sum.toString()}`, `4 ${sum.toString()}`];
    let [regimentsAmount, soldiersAmounts, dataSets] = getInput(testData);

    let result = processData(regimentsAmount, soldiersAmounts, dataSets);

    expect(result).toEqual([5, 1, -1]);
  });
});
