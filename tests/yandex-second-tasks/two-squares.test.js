const {
  findDisjoinedRectangles,
} = require("../../src/yandex-second-tasks/two-squares");

describe("findDisjoinedRectangles", () => {
  it("should return the correct number of disjoined rectangles", () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, ".", 12, 13, 14, 0],
      [0, ".", '#', ".", 3, 16, 0],
      [0, 17, ".", 5, '#', 18, 0],
      [0, 9, -1, -2, -3, 5, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    const coordinates = [
      [2, 2],
      [3, 4],
    ];

    const result = findDisjoinedRectangles(board, coordinates);

    expect(result).toBe("NO");
  });

  // it("should return the correct number of disjoined rectangles", () => {
  //   const board = [
  //     [0, 1, 0],
  //     [3, "#", 2],
  //     [0, ".", 0],
  //     [0, 0, 0],
  //   ];
  //   const width = 1;
  //   const height = 2;

  //   const result = findDisjoinedRectangles(board, width, height);

  //   expect(result).toBe('NO');
  // });

  // it("should return the correct number of disjoined rectangles", () => {
  //   const board = [
  //     [0, 0, 0],
  //     [0, "#", 0],
  //     [0, ".", 0],
  //     [0, 0, 0],
  //   ];
  //   const width = 1;
  //   const height = 2;

  //   const result = findDisjoinedRectangles(board, width, height);

  //   expect(result).toBe('NO');
  // });
});
