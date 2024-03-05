const { playTheGame } = require("../../src/yandex-first-tasks/ruin-quarters");

describe("playTheGame", () => {
  it("game winning possible, first ruin the quarters, later kill enemy soldiers", () => {
    // Test case 1
    let result = playTheGame(10, 11, 15);
    expect(result).toBe(4);

    // Test case 2
    result = playTheGame(25, 200, 10);
    expect(result).toBe(13);


    it("game winnin not possible, should return -1", () => {
      result = playTheGame(1, 2, 1);
      expect(result).toBe();
    });
  });
});
