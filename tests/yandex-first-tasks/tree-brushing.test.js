const {
  countTreesAmount,
  overlap,
  mergeCoordinates,
} = require("../../src/yandex-first-tasks/tree-brushing");

describe("overlap", () => {
  it("one coordinate range completely inside another", () => {
    let coordinate1 = [2, 10];
    let coordinate2 = [4, 6];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });

  it("one coordinate range completely inside another", () => {
    let coordinate2 = [4, 6];
    let coordinate1 = [2, 10];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });

  it("one coordinate range completely inside another, negative values", () => {
    let coordinate1 = [-10, 20];
    let coordinate2 = [4, 6];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });

  it("ranges partially overlap", () => {
    let coordinate1 = [-10, 20];
    let coordinate2 = [12, 40];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });

  it("ranges do not overlap", () => {
    let coordinate1 = [1, 5];
    let coordinate2 = [10, 15];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(false);
  });

  it("one coordinate range is a single point", () => {
    let coordinate1 = [5, 5];
    let coordinate2 = [4, 6];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });

  it("coordinate ranges touch each other", () => {
    let coordinate1 = [5, 6];
    let coordinate2 = [6, 7];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });

  it("coordinate ranges do not touch each other", () => {
    let coordinate1 = [5, 6];
    let coordinate2 = [7, 8];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(false);
  });

  it("overlap fully", () => {
    let coordinate1 = [5, 6];
    let coordinate2 = [-7, 8];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });

  it("overlap fully", () => {
    let coordinate1 = [-100000000, 100000000];
    let coordinate2 = [-100000000, 100000000];

    let result = overlap(coordinate1, coordinate2);
    expect(result).toBe(true);
  });
});

describe("mergeCoordinates", () => {
  it("one coordinate range completely inside another", () => {
    let coordinate1 = [2, 10];
    let coordinate2 = [4, 6];

    let result = mergeCoordinates(coordinate1, coordinate2);
    expect(result).toEqual([2, 10]);
  });

  it("one coordinate range completely inside another, negative values", () => {
    let coordinate1 = [-10, 20];
    let coordinate2 = [4, 6];

    let result = mergeCoordinates(coordinate1, coordinate2);
    expect(result).toEqual([-10, 20]);
  });

  it("ranges partially mergeCoordinates", () => {
    let coordinate1 = [-10, 20];
    let coordinate2 = [12, 40];

    let result = mergeCoordinates(coordinate1, coordinate2);
    expect(result).toEqual([-10, 40]);
  });

  it("one coordinate range is a single point", () => {
    let coordinate1 = [5, 5];
    let coordinate2 = [4, 6];

    let result = mergeCoordinates(coordinate1, coordinate2);
    expect(result).toEqual([4, 6]);
  });

  it("coordinate ranges touch each other", () => {
    let coordinate1 = [5, 6];
    let coordinate2 = [6, 7];

    let result = mergeCoordinates(coordinate1, coordinate2);
    expect(result).toEqual([5, 7]);
  });

  it("overlap fully", () => {
    let coordinate1 = [5, 6];
    let coordinate2 = [-7, 8];

    let result = mergeCoordinates(coordinate1, coordinate2);
    expect(result).toEqual([-7, 8]);
  });

  it("overlap fully", () => {
    let coordinate1 = [-100000000, 100000000];
    let coordinate2 = [-100000000, 100000000];

    let result = mergeCoordinates(coordinate1, coordinate2);
    expect(result).toEqual([-100000000, 100000000]);
  });
});

describe("countTreesAmount", () => {
  test("From source, overlapping", () => {
    const result = countTreesAmount([0, 7], [12, 5]);
    expect(result).toBe(25);
  });

  test("Both people are at the same tree,can't go anywhere", () => {
    const result = countTreesAmount([0, 0], [0, 0]);
    expect(result).toBe(1);
  });

  test("Both persons start from one point", () => {
    const result = countTreesAmount([2, 2], [2, 4]);
    expect(result).toBe(9);
  });

  test("No overlapping", () => {
    const result = countTreesAmount([0, 2], [100, 5]);
    expect(result).toBe(5 + 11);
  });

  test("Both people overlap with each other", () => {
    const result = countTreesAmount([-2, 10], [-4, 20]);
    expect(result).toBe(41);
  });

  test("One person overlap with another", () => {
    const result = countTreesAmount([-4, 10], [-2, 1]);
    expect(result).toBe(21);
  });

  test("Overlap on more than one tree", () => {
    const result = countTreesAmount([0, 7], [12, 8]);
    expect(result).toBe(28);
  });

  test("Maximal range", () => {
    const result = countTreesAmount([-100000000, 100000000],
      [100000000, 100000000]);
    expect(result).toBe(400000001);
  })
});
