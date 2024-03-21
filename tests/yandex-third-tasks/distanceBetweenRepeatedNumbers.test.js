const {
  checkDistances,
} = require("../../src/yandex-third-tasks/distanceBetweenRepeatedNumbers");

test("no distance", () => {
  let data = [1, 2, 3, 1];
  let distance = 2;

  expect(checkDistances(distance, data)).toBe("NO");
});

test("no distance", () => {
  let data = [1, 2, 3, 1, 2, 3];
  let distance = 2;

  expect(checkDistances(distance, data)).toBe("NO");
});

test("have distance", () => {
  let data = [1, 0, 1, 1];
  let distance = 1;

  expect(checkDistances(distance, data)).toBe("YES");
});

test("have bigger distance", () => {
  let data = [1000000, 0, 1, 1000000];
  let distance = 10 ** 5;

  expect(checkDistances(distance, data)).toBe("YES");
});


test("have bigger distance", () => {
  let data = [1000000, 0, 1, 1000000];
  let distance = 1;

  expect(checkDistances(distance, data)).toBe("NO");
});

test("have bigger distance", () => {
  let data = [1000000, 0, 1, 1000000];
  let distance = 2;

  expect(checkDistances(distance, data)).toBe("NO");
});

test("have bigger distance", () => {
  let data = [1000000, 0, 1, 1000000];
  let distance = 3;

  expect(checkDistances(distance, data)).toBe("YES");
});