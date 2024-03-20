const {
  getInput,
  findMaxHeight,
} = require("../../src/yandex-second-tasks/snailHeight");

describe("findMaxHeight", () => {
  it("should return right value", () => {
    let data = ["3", "1 5", "8 2", "4 4"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("10" + "\n" + "2 3 1");
  });

  it("should return right value", () => {
    let data = ["2", "7 6", "7 4"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("10" + "\n" + "2 1");
  });

  it("should return right value", () => {
    let data = ["2", "127 6", "7 24"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("128" + "\n" + "1 2");
  });

  it("should return right value", () => {
    let data = ["2", "3 6", "7 24"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("7" + "\n" + "2 1");
  });

  it("should return right value", () => {
    let data = ["2", "7 24", "3 6"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("7" + "\n" + "1 2");
  });

  it("should return right value", () => {
    let data = ["2", "500 500", "30 5"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("525" + "\n" + "2 1");
  });

  it("should return right value", () => {
    let data = ["2", "500 500", "30 500"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("500" + "\n" + "1 2");
  });

  it("should return right value", () => {
    let data = ["1", "7 3"];

    const [berriesAmount, sortedHeights, maxDayHeight] = getInput(data);
    const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

    expect(result).toBe("7" + "\n" + "1");
  });
});
