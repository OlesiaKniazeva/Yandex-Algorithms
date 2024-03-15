const {
  chooseRowAndColumn,
} = require("../../src/yandex-second-tasks/chooseForbiddenRowAndColumn");

describe("chooseRowAndColumn", () => {
  it("should return the correct row and column", () => {
    const data = [
      { coordinate: [3, 4], size: 12 },
      { coordinate: [2, 2], size: 11 },
      { coordinate: [3, 3], size: 10 },
      { coordinate: [2, 1], size: 9 },
      { coordinate: [3, 2], size: 8 },
      { coordinate: [1, 4], size: 7 },
      { coordinate: [3, 1], size: 6 },
      { coordinate: [1, 3], size: 5 },
      { coordinate: [2, 4], size: 4 },
      { coordinate: [1, 2], size: 3 },
      { coordinate: [2, 3], size: 2 },
      { coordinate: [1, 1], size: 1 },
    ];
  const maxData = [ [ 3, 4 ] ];
  const result = chooseRowAndColumn(maxData, data);
    expect(result).toEqual([3, 2]);
  });

  it("should return the correct row and column", () => {
    const data = [
      { coordinate: [2, 2], size: 4 },
      { coordinate: [2, 1], size: 3 },
      { coordinate: [1, 2], size: 2 },
      { coordinate: [1, 1], size: 1 },
    ];
    const maxData = [[2, 2]];
    const result = chooseRowAndColumn(maxData, data);
    expect(result).toEqual([2, 2]);
  });

  it("have several maximums", () => {
    const data = [
      { coordinate: [1, 2], size: 12 },
      { coordinate: [3, 4], size: 12 },
      { coordinate: [2, 2], size: 11 },
      { coordinate: [3, 3], size: 10 },
      { coordinate: [2, 1], size: 9 },
      { coordinate: [3, 2], size: 8 },
      { coordinate: [1, 4], size: 7 },
      { coordinate: [3, 1], size: 6 },
      { coordinate: [1, 3], size: 5 },
      { coordinate: [2, 4], size: 4 },
      { coordinate: [2, 3], size: 2 },
      { coordinate: [1, 1], size: 1 },
    ];
  const maxData = [ [ 1, 2 ], [ 3, 4 ] ];
  const result = chooseRowAndColumn(maxData, data);
    expect(result).toEqual([3, 2]);
  });

  it("have several maximums", () => {
    const data = [
      { coordinate: [1, 1], size: 12 },
      { coordinate: [1, 2], size: 12 },
      { coordinate: [2, 2], size: 12 },
      { coordinate: [3, 4], size: 11 },
      { coordinate: [3, 3], size: 10 },
      { coordinate: [2, 1], size: 9 },
      { coordinate: [3, 2], size: 8 },
      { coordinate: [1, 4], size: 7 },
      { coordinate: [3, 1], size: 6 },
      { coordinate: [1, 3], size: 5 },
      { coordinate: [2, 4], size: 4 },
      { coordinate: [2, 3], size: 2 },
    ];
    const maxData = [
      [1, 1],
      [1, 2],
      [2, 2],
    ];
    const result = chooseRowAndColumn(maxData, data);
    expect(result).toEqual([1, 2]);
  });
});
