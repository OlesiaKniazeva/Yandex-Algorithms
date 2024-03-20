const {
  countStepsToFillColumn,
  getInput,
} = require("../../src/yandex-second-tasks/findBestColumn");

describe("countStepsToFillColumn", () => {
  it("should return the correct number of steps to fill the column", () => {
    let testData = ["3", "3 1", "3 2", "2 2"];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(3);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = ["3", "1 1", "3 3", "2 2"];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(2);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = ["3", "1 2", "3 3", "1 1"];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(3);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = ["3", "1 2", "2 1", "1 1"];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(3);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = ["3", "3 3", "2 3", "3 2"];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(3);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = ["3", "3 3", "2 2", "3 2"];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(3);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = ["5", "1 2", "5 4", "2 5", "2 1", "3 3"];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(8);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = [
      "10",
      "3 7",
      "7 10",
      "4 9",
      "2 2",
      "5 9",
      "8 2",
      "5 5",
      "10 4",
      "2 10",
      "6 5",
    ];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(32);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = [
      "10",
      "8 7",
      "1 1",
      "3 3",
      "2 1",
      "6 9",
      "1 8",
      "10 4",
      "2 8",
      "9 2",
      "4 6",
    ];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(36);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = [
      "20",
      "11 20",
      "2 8",
      "7 19",
      "17 4",
      "7 3",
      "3 14",
      "4 9",
      "2 13",
      "6 15",
      "13 5",
      "1 12",
      "13 11",
      "19 16",
      "11 6",
      "8 10",
      "12 2",
      "7 10",
      "9 20",
      "17 16",
      "8 13",
    ];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(123);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = [
      "20",
      "13 19",
      "3 13",
      "20 19",
      "12 8",
      "20 15",
      "6 10",
      "6 9",
      "3 19",
      "7 17",
      "6 3",
      "18 18",
      "5 15",
      "13 15",
      "9 1",
      "11 3",
      "9 17",
      "15 10",
      "18 11",
      "4 14",
      "16 4",
    ];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(108);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = [
      "51",
      "36 15",
      "51 18",
      "26 45",
      "8 38",
      "35 16",
      "10 8",
      "47 50",
      "51 24",
      "22 28",
      "41 49",
      "32 48",
      "14 4",
      "9 42",
      "16 28",
      "26 22",
      "33 8",
      "35 44",
      "1 31",
      "26 9",
      "50 13",
      "33 31",
      "16 51",
      "18 20",
      "22 51",
      "23 31",
      "22 19",
      "37 42",
      "51 35",
      "23 7",
      "3 2",
      "22 42",
      "25 27",
      "2 40",
      "1 1",
      "20 36",
      "32 51",
      "23 36",
      "37 32",
      "31 9",
      "39 14",
      "13 19",
      "44 25",
      "6 22",
      "39 28",
      "39 7",
      "6 45",
      "5 30",
      "19 12",
      "37 35",
      "6 32",
      "17 49",
    ];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(719);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = [
      "99",
      "60 19",
      "20 81",
      "67 84",
      "60 40",
      "28 85",
      "99 43",
      "7 11",
      "62 52",
      "44 21",
      "23 14",
      "99 82",
      "97 30",
      "38 73",
      "44 78",
      "70 55",
      "69 99",
      "54 65",
      "75 15",
      "75 91",
      "28 14",
      "9 47",
      "95 4",
      "40 77",
      "9 94",
      "82 49",
      "85 33",
      "16 10",
      "45 48",
      "13 41",
      "17 88",
      "59 91",
      "95 74",
      "40 88",
      "86 17",
      "4 41",
      "45 12",
      "15 52",
      "58 63",
      "44 20",
      "24 84",
      "98 21",
      "42 80",
      "63 67",
      "37 31",
      "22 22",
      "16 6",
      "29 58",
      "80 71",
      "2 59",
      "89 71",
      "60 97",
      "50 1",
      "18 45",
      "92 68",
      "47 49",
      "47 30",
      "57 3",
      "50 93",
      "51 25",
      "23 55",
      "65 86",
      "48 62",
      "36 58",
      "11 78",
      "64 58",
      "97 87",
      "13 68",
      "92 60",
      "32 78",
      "43 24",
      "81 23",
      "15 49",
      "14 37",
      "41 83",
      "9 32",
      "67 13",
      "87 86",
      "94 71",
      "19 72",
      "68 94",
      "2 48",
      "33 89",
      "16 15",
      "17 52",
      "50 80",
      "22 91",
      "35 46",
      "63 25",
      "26 50",
      "43 41",
      "93 31",
      "49 33",
      "4 16",
      "51 82",
      "25 65",
      "29 24",
      "91 12",
      "53 53",
      "11 94",
    ];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(2735);
  });

  it("should return the correct number of steps to fill the column", () => {
    let testData = [
      "100",
      "1 1",
      "2 2",
      "3 3",
      "4 4",
      "5 5",
      "6 6",
      "7 7",
      "8 8",
      "9 9",
      "10 10",
      "11 11",
      "12 12",
      "13 13",
      "14 14",
      "15 15",
      "16 16",
      "17 17",
      "18 18",
      "19 19",
      "20 20",
      "21 21",
      "22 22",
      "23 23",
      "24 24",
      "25 25",
      "26 26",
      "27 27",
      "28 28",
      "29 29",
      "30 30",
      "31 31",
      "32 32",
      "33 33",
      "34 34",
      "35 35",
      "36 36",
      "37 37",
      "38 38",
      "39 39",
      "40 40",
      "41 41",
      "42 42",
      "43 43",
      "44 44",
      "45 45",
      "46 46",
      "47 47",
      "48 48",
      "49 49",
      "50 50",
      "51 51",
      "52 52",
      "53 53",
      "54 54",
      "55 55",
      "56 56",
      "57 57",
      "58 58",
      "59 59",
      "60 60",
      "61 61",
      "62 62",
      "63 63",
      "64 64",
      "65 65",
      "66 66",
      "67 67",
      "68 68",
      "69 69",
      "70 70",
      "71 71",
      "72 72",
      "73 73",
      "74 74",
      "75 75",
      "76 76",
      "77 77",
      "78 78",
      "79 79",
      "80 80",
      "81 81",
      "82 82",
      "83 83",
      "84 84",
      "85 85",
      "86 86",
      "87 87",
      "88 88",
      "89 89",
      "90 90",
      "91 91",
      "92 92",
      "93 93",
      "94 94",
      "95 95",
      "96 96",
      "97 97",
      "98 98",
      "99 99",
      "100 100",
    ];
    let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] = getInput(true, testData);
    expect(
      countStepsToFillColumn(sideSize, board, middleColumn, coordinatesLeft, coordinatesRight)
    ).toBe(2500);
  });
});
