const { countTreesAmount } = require('../src/tree-brushing');

test("From source, overlapping", () => {
  const result = countTreesAmount([0, 7], [12, 5]);
  expect(result).toBe(25);
});

test("Both people are at the same tree,can't go anywhere", () => {
  const result = countTreesAmount([0, 0], [0, 0]);
  expect(result).toBe(1);
});


test('Both persons start from one point', () => {
  const result = countTreesAmount([2, 2], [2, 4]);
  expect(result).toBe(9);
});

test('No overlapping', () => {
  const result = countTreesAmount([0, 2], [100, 5]);
  expect(result).toBe(5 + 11);
});

test('Person is near the end of alley', () => {
  const result = countTreesAmount([10^8, 5], [-10^8, 3]);
  expect(result).toBe(6 + 4);
});

test('Both people near one end of alley', () => {
  const result = countTreesAmount([10^8, 12], [10^8, 10]);
  expect(result).toBe(13);
});


test('Both people overlap with each other', () => {
  const result = countTreesAmount([-2, 10], [-4, 20]);
  expect(result).toBe(41);
});

test('One person overlap with another', () => {
  const result = countTreesAmount([-4, 10], [-2, 1]);
  expect(result).toBe(21);
});

test('Overlap on more than one tree', () => {
  const result = countTreesAmount([0, 7], [12, 8]);
  expect(result).toBe();
})


