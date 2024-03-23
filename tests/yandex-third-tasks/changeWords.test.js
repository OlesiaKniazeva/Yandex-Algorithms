const { changeWords } = require("../../src/yandex-third-tasks/changeWords");

describe("changeWords", () => {
  test("can change", () => {
    let dict = ["a", "b"];
    let words = ["abdafb", "basrt", "casds", "dsasa", "a"];

    expect(changeWords(dict, words)).toEqual(["a", "b", "casds", "dsasa", "a"]);
  });

  test("can change", () => {
    let dict = ["aa", "bc", "aaa"];
    let words = ["a", "aa", "aaa", "bcd", "abcd"];

    expect(changeWords(dict, words)).toEqual(["a", "aa", "aa", "bc", "abcd"]);
  });

  test("can't change", () => {
    let dict = ["aan", "bcbb", "aaam"];
    let words = ["a", "aa", "aaa", "bcd", "abcd"];

    expect(changeWords(dict, words)).toEqual(["a", "aa", "aaa", "bcd", "abcd"]);
  });

  test("can't change", () => {
    let dict = ["aan", "bcyy", "aaam"];
    let words = ["a", "aa", "aaa", "bcd", "abcd"];

    expect(changeWords(dict, words)).toEqual(["a", "aa", "aaa", "bcd", "abcd"]);
  });

  test("can change for shorter", () => {
    let dict = ["aan", "bc", "aaam", "a"];
    let words = ["a", "aa", "aaa", "bcd", "abcd"];

    expect(changeWords(dict, words)).toEqual(["a", "a", "a", "bc", "a"]);
  });

  test("can change words, if several of dict have same length", () => {
    let dict = ["ab", "ac", "ad"];
    let words = ["abra", "attoot", "aclo", "adddd"];

    expect(changeWords(dict, words)).toEqual(["ab", "attoot", "ac", "ad"]);
  });

  test("can change words, if several of dict have same length", () => {
    let dict = ["abc", "acn", "adyo"];
    let words = ["abra", "abcf", "aclo", "adddd"];

    expect(changeWords(dict, words)).toEqual(["abra", "abc", "aclo", "adddd"]);
  });

  test("can change words, if several of dict have same length", () => {
    let dict = ["abc", "acn", "adyo"];
    let words = ["abra", "abcf", "aclo", "adyoyyyyy"];

    expect(changeWords(dict, words)).toEqual(["abra", "abc", "aclo", "adyo"]);
  });

  test("can change words, if several of dict have same length", () => {
    let dict = ["non", "nom", "not"];
    let words = ["notorot", "nomol", "nopot", "nonanon"];

    expect(changeWords(dict, words)).toEqual(["not", "nom", "nopot", "non"]);
  });
});
