const {
  getInput,
  findCommonTracks,
} = require("../../src/yandex-third-tasks/findCommonMusic");

describe("findCommonTracks", () => {
  test("one person", () => {
    let data = ["1", "2", "GoGetIt Life"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("2" + "\n" + "GoGetIt Life");
  });

  test("one person", () => {
    let data = ["1", "2", "Life GoGetIt"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("2" + "\n" + "GoGetIt Life");
  });

  test("several people", () => {
    let data = ["2", "2", "Love Life", "2", "Life GoodDay"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("1" + "\n" + "Life");
  });

  test("several people, no common tracks", () => {
    let data = ["2", "2", "Love Baby", "2", "Life GoodDay"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("0" + "\n" + "");
  });

  test("several people, all tracks csame", () => {
    let data = ["2", "2", "Love Life", "2", "Love Life"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("2" + "\n" + "Life Love");
  });

  test("several people, all tracks csame", () => {
    let data = ["2", "2", "Life Love", "2", "Love Life"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("2" + "\n" + "Life Love");
  });

  test("several people, tracks with number in name", () => {
    let data = ["2", "2", "Life Love1", "2", "Love2 Life"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("1" + "\n" + "Life");
  });

  test("several people, more tracks", () => {
    let data = ["2", "4", "Life Love1 No A", "4", "A Love2 No Life"];

    let [peopleAmount, tracks] = getInput(data);
    let result = findCommonTracks(peopleAmount, tracks);
    expect(result).toEqual("3" + "\n" + "A Life No");
  });
});
