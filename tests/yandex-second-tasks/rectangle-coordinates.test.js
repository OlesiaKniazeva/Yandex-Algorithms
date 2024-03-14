const {
  findCoordinates,
} = require("../../src/yandex-second-tasks/rectangle-coordinates");

describe("findCoordinates", () => {
  it("only one filled square", () => {
    const xCoordinates = [1];
    const yCoordinates = [1];
    const expected = [1, 1, 1, 1];

    const result = findCoordinates(xCoordinates, yCoordinates);

    expect(result).toEqual(expected);
  });

  it("test", () => {
    const xCoordinates = [1, 3, 3, 6];
    const yCoordinates = [3, 1, 5, 3];

    const result = findCoordinates(xCoordinates, yCoordinates);
    const expected = [1, 1, 6, 5];

    expect(result).toEqual(expected);
  });

  it("test", () => {
    const xCoordinates = [1, 1, 1, 1];
    const yCoordinates = [1, 3, 7, -5];

    const result = findCoordinates(xCoordinates, yCoordinates);
    const expected = [1, -5, 1, 7];

    expect(result).toEqual(expected);
  });

  it("test", () => {
    const xCoordinates = [1, 1, 5];
    const yCoordinates = [1, 10, 5];

    const result = findCoordinates(xCoordinates, yCoordinates);
    const expected = [1, 1, 5, 10];

    expect(result).toEqual(expected);
  });
});
