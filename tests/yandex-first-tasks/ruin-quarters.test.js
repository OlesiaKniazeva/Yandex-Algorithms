const { playTheGame } = require("../../src/yandex-first-tasks/ruin-quarters");

describe("playTheGame", () => {
  it("playTheGame winning possible, first ruin the quarters, later kill enemy soldiers", () => {
    let result = playTheGame(10, 11, 15);
    expect(result).toBe(4);
  });
  

  it("playTheGame winning possible, first ruin the quarters, later kill enemy soldiers", () => {
    let result = playTheGame(25, 200, 10);
    expect(result).toBe(13);
  });



  it("playTheGame winnin not possible, should return -1", () => {
    let result = playTheGame(1, 2, 1);
    expect(result).toBe(-1);
  });


  it("playTheGame winning possible", () => {
    let result = playTheGame(1, 1, 1);
    expect(result).toBe(1);
  });


  it("playTheGame winning possible", () => {
    let result = playTheGame(250, 500, 187);
    expect(result).toBe(4);
  });

  it("playTheGame winning possible", () => {
    let result = playTheGame(250, 500, 225);
    expect(result).toBe(7);
  });

it("playTheGame winning possible", () => {
  let result = playTheGame(250, 500, 125);
  expect(result).toBe(3);
});

it("playTheGame winning possible", () => {
  let result = playTheGame(250, 500, 230);
  expect(result).toBe(8);
});

it("playTheGame winning possible", () => {
  let result = playTheGame(250, 500, 218);
  expect(result).toBe(6);
});

it("playTheGame winning possible", () => {
  let result = playTheGame(250, 500, 238);
  expect(result).toBe(12);
});

it("playTheGame winning possible", () => {
  let result = playTheGame(5, 8, 5);
  expect(result).toBe(4);
});

});
