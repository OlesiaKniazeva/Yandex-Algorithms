const EPSILON = 10 ** -9;

function areNumbersClose(num1, num2) {
  return Math.abs(num1 - num2) < EPSILON;
}

const {
  ifDistanceEqual,
} = require("../../src/yandex-first-tasks/runners-distance");

test("Same speed and direction", () => {
  let result = ifDistanceEqual(6, 3, 1, 1, 1);
  expect(result[0]).toBe("YES");
  expect(areNumbersClose(result[1], 1)).toBe(true);
});

test("Same direction, different speed", () => {
  let result = ifDistanceEqual(12, 8, 10, 5, 20);
  expect(result[0]).toBe("YES");
  expect(areNumbersClose(result[1], 0.3)).toBe(true);
});

test("One boy not moving", () => {
  let result = ifDistanceEqual(5, 0, 0, 1, 2);
  expect(result[0]).toBe("YES");
  expect(areNumbersClose(result[1], 2.0)).toBe(true);
});

test("Distance is not equal with different speeds", () => {
  let result = ifDistanceEqual(10, 7, -3, 1, 4);
  expect(result[0]).toBe("YES");
  console.log(result[1]);

  expect(areNumbersClose(result[1], 0.8571428571)).toBe(true);
});
