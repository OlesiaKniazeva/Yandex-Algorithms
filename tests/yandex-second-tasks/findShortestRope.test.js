const { findShortestRope } = require("../../src/yandex-second-tasks/findShortestRope");

describe("findShortestRope", () => {
  it("should return the shortest rope length", () => {
    // Test case 1
    expect(findShortestRope(3, [5, 3, 8])).toBe(8 + 3 + 5);

    // Test case 2
    expect(findShortestRope(4, [1, 5, 2, 1])).toBe(1);

    // Test case 3
    expect(findShortestRope(2, [1, 1])).toBe(2);

    // Test case 4
    expect(findShortestRope(4, [5, 12, 4, 3])).toBe(24);

    expect(findShortestRope(2, [1, 5])).toBe(4);

    expect(findShortestRope(2, [5, 5])).toBe(10);

  });
});
