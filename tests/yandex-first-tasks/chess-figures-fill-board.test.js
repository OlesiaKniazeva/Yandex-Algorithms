const {
  countFreeBoardSquares,
} = require("../../src/yandex-first-tasks/chess-figures-fill-board");

describe("countFreeBoardSquares", () => {
  it("Only rooks on a board", () => {
    const rooks = [[1, 2]];
    const bishops = [];
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(countFreeBoardSquares(rooks, bishops, board)).toBe(49);
  });

  it("Only bishops on a board", () => {
    const rooks = [];
    const bishops = [[6, 2]];
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(countFreeBoardSquares(rooks, bishops, board)).toBe(54);
  });

  it("rooks and bishops on a board", () => {
    const rooks = [[1, 1]];
    const bishops = [[5, 3]];
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(countFreeBoardSquares(rooks, bishops, board)).toBe(40);
  });
});
