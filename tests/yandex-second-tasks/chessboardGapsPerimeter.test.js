const {
  findPerimeter,
} = require("../../src/yandex-second-tasks/chessboardGapsPerimeter");

describe("findPerimeter", () => {
  it("should return the correct perimeter for a given chessboard and coordinates", () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, "*", "*", "*", 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    let coordinates = [
      [1, 1],
      [1, 2],
      [2, 1],
    ];

    expect(findPerimeter(board, coordinates)).toBe(8);
  });

  it("one cell", () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, '*', 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const coordinates = [[8, 8]];

    expect(findPerimeter(board, coordinates)).toBe(4);
  });
});
