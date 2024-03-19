const { findMaxWin } = require("../../src/yandex-second-tasks/win-maximum2");

describe("findMaxWin", () => {
  it("should return max from several available options", () => {
    let sectorsAmount = 5;
    let sectors = [
      { size: 5, index: 4 },
      { size: 4, index: 3 },
      { size: 3, index: 2 },
      { size: 2, index: 1 },
      { size: 1, index: 0 },
    ];
    let minSpeed = 3;
    let maxSpeed = 5;
    let speedDecrease = 2;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(5);
  });

  it("should return max only one option speed", () => {
    let sectorsAmount = 5;
    let sectors = [
      { size: 5, index: 4 },
      { size: 4, index: 3 },
      { size: 3, index: 2 },
      { size: 2, index: 1 },
      { size: 1, index: 0 },
    ];
    let minSpeed = 15;
    let maxSpeed = 15;
    let speedDecrease = 2;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(4);
  });

  it("should return max, no need to move", () => {
    let sectorsAmount = 5;
    let sectors = [
      { size: 5, index: 0 },
      { size: 4, index: 1 },
      { size: 3, index: 2 },
      { size: 2, index: 3 },
      { size: 1, index: 4 },
    ];
    let minSpeed = 2;
    let maxSpeed = 5;
    let speedDecrease = 2;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(5);
  });

  it("should return max, no need to move", () => {
    let sectors = [
      { size: 993, index: 48 },
      { size: 975, index: 13 },
      { size: 962, index: 20 },
      { size: 936, index: 47 },
      { size: 927, index: 36 },
      { size: 925, index: 33 },
      { size: 890, index: 44 },
      { size: 884, index: 18 },
      { size: 883, index: 32 },
      { size: 873, index: 5 },
      { size: 850, index: 30 },
      { size: 829, index: 2 },
      { size: 828, index: 9 },
      { size: 800, index: 58 },
      { size: 776, index: 19 },
      { size: 776, index: 22 },
      { size: 769, index: 57 },
      { size: 734, index: 15 },
      { size: 718, index: 35 },
      { size: 703, index: 10 },
      { size: 672, index: 11 },
      { size: 650, index: 42 },
      { size: 643, index: 25 },
      { size: 633, index: 54 },
      { size: 583, index: 3 },
      { size: 556, index: 55 },
      { size: 537, index: 60 },
      { size: 536, index: 38 },
      { size: 510, index: 31 },
      { size: 501, index: 24 },
      { size: 490, index: 46 },
      { size: 485, index: 40 },
      { size: 466, index: 50 },
      { size: 452, index: 39 },
      { size: 446, index: 28 },
      { size: 431, index: 56 },
      { size: 431, index: 59 },
      { size: 413, index: 17 },
      { size: 384, index: 6 },
      { size: 376, index: 12 },
      { size: 357, index: 4 },
      { size: 299, index: 0 },
      { size: 299, index: 49 },
      { size: 296, index: 37 },
      { size: 283, index: 7 },
      { size: 280, index: 52 },
      { size: 251, index: 8 },
      { size: 208, index: 23 },
      { size: 207, index: 26 },
      { size: 205, index: 43 },
      { size: 190, index: 51 },
      { size: 180, index: 29 },
      { size: 127, index: 45 },
      { size: 99, index: 14 },
      { size: 78, index: 16 },
      { size: 52, index: 41 },
      { size: 45, index: 21 },
      { size: 37, index: 27 },
      { size: 35, index: 34 },
      { size: 11, index: 1 },
      { size: 3, index: 53 },
    ];
    let sectorsAmount = 61;
    let minSpeed = 96688499;
    let maxSpeed = 401051285;
    let speedDecrease = 6763618;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(993);
  });

  it("should return max", () => {
    let sectors = [
      { size: 972, index: 9 },
      { size: 930, index: 6 },
      { size: 897, index: 7 },
      { size: 808, index: 19 },
      { size: 797, index: 21 },
      { size: 788, index: 25 },
      { size: 778, index: 24 },
      { size: 762, index: 10 },
      { size: 679, index: 5 },
      { size: 662, index: 17 },
      { size: 582, index: 23 },
      { size: 577, index: 26 },
      { size: 519, index: 22 },
      { size: 465, index: 13 },
      { size: 463, index: 0 },
      { size: 418, index: 27 },
      { size: 389, index: 8 },
      { size: 335, index: 1 },
      { size: 324, index: 29 },
      { size: 289, index: 3 },
      { size: 287, index: 18 },
      { size: 239, index: 15 },
      { size: 230, index: 4 },
      { size: 214, index: 28 },
      { size: 183, index: 2 },
      { size: 134, index: 12 },
      { size: 122, index: 20 },
      { size: 104, index: 16 },
      { size: 94, index: 14 },
      { size: 15, index: 11 },
    ];
    let sectorsAmount = 30;

    let minSpeed = 225708351;
    let maxSpeed = 711102211;
    let speedDecrease = 1;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(972);
  });

  it("should return max from several available options", () => {
    let sectorsAmount = 9;
    let sectors = [
      { size: 1000, index: 7 },
      { size: 923, index: 6 },
      { size: 805, index: 1 },
      { size: 713, index: 3 },
      { size: 707, index: 0 },
      { size: 584, index: 4 },
      { size: 352, index: 5 },
      { size: 279, index: 2 },
      { size: 237, index: 8 },
    ];
    let minSpeed = 29;
    let maxSpeed = 38;
    let speedDecrease = 1;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(1000);
  });

  it("should return max from several available options", () => {
    let sectorsAmount = 97;
    let sectors = [
      { size: 999, index: 12 },
      { size: 967, index: 20 },
      { size: 962, index: 28 },
      { size: 960, index: 73 },
      { size: 950, index: 16 },
      { size: 950, index: 36 },
      { size: 936, index: 65 },
      { size: 922, index: 40 },
      { size: 913, index: 26 },
      { size: 886, index: 79 },
      { size: 876, index: 82 },
      { size: 871, index: 86 },
      { size: 852, index: 7 },
      { size: 851, index: 70 },
      { size: 847, index: 2 },
      { size: 840, index: 77 },
      { size: 832, index: 45 },
      { size: 829, index: 9 },
      { size: 824, index: 0 },
      { size: 820, index: 35 },
      { size: 817, index: 58 },
      { size: 816, index: 31 },
      { size: 802, index: 50 },
      { size: 779, index: 44 },
      { size: 778, index: 91 },
      { size: 768, index: 81 },
      { size: 751, index: 30 },
      { size: 729, index: 32 },
      { size: 724, index: 1 },
      { size: 682, index: 41 },
      { size: 682, index: 72 },
      { size: 680, index: 5 },
      { size: 670, index: 59 },
      { size: 665, index: 46 },
      { size: 643, index: 68 },
      { size: 635, index: 71 },
      { size: 614, index: 33 },
      { size: 604, index: 6 },
      { size: 597, index: 51 },
      { size: 574, index: 37 },
      { size: 573, index: 83 },
      { size: 565, index: 34 },
      { size: 551, index: 84 },
      { size: 526, index: 47 },
      { size: 526, index: 80 },
      { size: 506, index: 17 },
      { size: 504, index: 88 },
      { size: 492, index: 22 },
      { size: 465, index: 27 },
      { size: 460, index: 38 },
      { size: 440, index: 63 },
      { size: 439, index: 42 },
      { size: 419, index: 94 },
      { size: 416, index: 92 },
      { size: 400, index: 67 },
      { size: 389, index: 48 },
      { size: 372, index: 24 },
      { size: 352, index: 76 },
      { size: 351, index: 43 },
      { size: 331, index: 13 },
      { size: 329, index: 93 },
      { size: 323, index: 10 },
      { size: 322, index: 64 },
      { size: 304, index: 85 },
      { size: 303, index: 39 },
      { size: 296, index: 60 },
      { size: 290, index: 56 },
      { size: 272, index: 96 },
      { size: 260, index: 19 },
      { size: 242, index: 62 },
      { size: 239, index: 61 },
      { size: 234, index: 53 },
      { size: 227, index: 4 },
      { size: 223, index: 21 },
      { size: 223, index: 57 },
      { size: 220, index: 89 },
      { size: 217, index: 14 },
      { size: 200, index: 8 },
      { size: 198, index: 25 },
      { size: 193, index: 90 },
      { size: 190, index: 87 },
      { size: 183, index: 75 },
      { size: 166, index: 69 },
      { size: 159, index: 15 },
      { size: 156, index: 11 },
      { size: 148, index: 49 },
      { size: 131, index: 66 },
      { size: 126, index: 23 },
      { size: 117, index: 54 },
      { size: 109, index: 78 },
      { size: 105, index: 29 },
      { size: 98, index: 18 },
      { size: 92, index: 3 },
      { size: 77, index: 52 },
      { size: 65, index: 55 },
      { size: 65, index: 74 },
      { size: 59, index: 95 },
    ];

    let minSpeed = 110;
    let maxSpeed = 120;
    let speedDecrease = 1;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(999);
  });

  it("should return max from several available options", () => {
    let sectors = [
      { size: 994, index: 11 },
      { size: 974, index: 35 },
      { size: 931, index: 31 },
      { size: 877, index: 40 },
      { size: 851, index: 22 },
      { size: 847, index: 7 },
      { size: 831, index: 38 },
      { size: 780, index: 26 },
      { size: 755, index: 4 },
      { size: 720, index: 20 },
      { size: 688, index: 32 },
      { size: 627, index: 25 },
      { size: 605, index: 9 },
      { size: 548, index: 23 },
      { size: 526, index: 33 },
      { size: 513, index: 6 },
      { size: 506, index: 24 },
      { size: 503, index: 17 },
      { size: 494, index: 5 },
      { size: 494, index: 13 },
      { size: 485, index: 12 },
      { size: 464, index: 19 },
      { size: 432, index: 14 },
      { size: 393, index: 29 },
      { size: 323, index: 8 },
      { size: 288, index: 3 },
      { size: 282, index: 34 },
      { size: 234, index: 16 },
      { size: 233, index: 27 },
      { size: 207, index: 10 },
      { size: 195, index: 36 },
      { size: 181, index: 37 },
      { size: 170, index: 15 },
      { size: 154, index: 21 },
      { size: 145, index: 2 },
      { size: 119, index: 28 },
      { size: 95, index: 30 },
      { size: 89, index: 0 },
      { size: 69, index: 18 },
      { size: 52, index: 39 },
      { size: 18, index: 1 },
    ];
    let sectorsAmount = 41;
    let minSpeed = 939581274;
    let maxSpeed = 941006621;
    let speedDecrease = 142535;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(974);
  });

  it("should return max from several available options", () => {
    let sectors = [
      { size: 983, index: 3 },
      { size: 967, index: 42 },
      { size: 953, index: 15 },
      { size: 940, index: 28 },
      { size: 909, index: 33 },
      { size: 899, index: 51 },
      { size: 890, index: 9 },
      { size: 889, index: 34 },
      { size: 871, index: 38 },
      { size: 870, index: 54 },
      { size: 860, index: 27 },
      { size: 825, index: 16 },
      { size: 822, index: 14 },
      { size: 821, index: 4 },
      { size: 808, index: 46 },
      { size: 803, index: 53 },
      { size: 770, index: 43 },
      { size: 764, index: 40 },
      { size: 718, index: 12 },
      { size: 715, index: 26 },
      { size: 714, index: 29 },
      { size: 702, index: 17 },
      { size: 667, index: 41 },
      { size: 640, index: 36 },
      { size: 631, index: 35 },
      { size: 627, index: 18 },
      { size: 627, index: 20 },
      { size: 626, index: 8 },
      { size: 611, index: 57 },
      { size: 601, index: 52 },
      { size: 591, index: 55 },
      { size: 576, index: 11 },
      { size: 576, index: 47 },
      { size: 565, index: 32 },
      { size: 564, index: 5 },
      { size: 543, index: 24 },
      { size: 484, index: 30 },
      { size: 482, index: 22 },
      { size: 449, index: 1 },
      { size: 408, index: 19 },
      { size: 390, index: 21 },
      { size: 333, index: 0 },
      { size: 300, index: 56 },
      { size: 286, index: 6 },
      { size: 275, index: 2 },
      { size: 221, index: 37 },
      { size: 216, index: 49 },
      { size: 191, index: 48 },
      { size: 165, index: 45 },
      { size: 162, index: 13 },
      { size: 139, index: 44 },
      { size: 93, index: 50 },
      { size: 70, index: 7 },
      { size: 69, index: 10 },
      { size: 60, index: 23 },
      { size: 51, index: 31 },
      { size: 21, index: 39 },
      { size: 1, index: 25 },
    ];
    let sectorsAmount = 58;
    let minSpeed = 29344426;
    let maxSpeed = 290942786;
    let speedDecrease = 4844415;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(983);
  });

  it("should return max from several available options", () => {
    let sectorsAmount = 34;
    let sectors = [
      { size: 1000, index: 1 }, { size: 999, index: 33 },
      { size: 923, index: 9 },  { size: 916, index: 32 },
      { size: 895, index: 4 },  { size: 888, index: 30 },
      { size: 847, index: 25 }, { size: 805, index: 6 },
      { size: 794, index: 16 }, { size: 778, index: 13 },
      { size: 761, index: 15 }, { size: 757, index: 29 },
      { size: 720, index: 3 },  { size: 717, index: 23 },
      { size: 670, index: 14 }, { size: 541, index: 10 },
      { size: 535, index: 26 }, { size: 528, index: 2 },
      { size: 528, index: 12 }, { size: 488, index: 18 },
      { size: 438, index: 20 }, { size: 431, index: 11 },
      { size: 398, index: 28 }, { size: 370, index: 8 },
      { size: 325, index: 21 }, { size: 306, index: 27 },
      { size: 293, index: 24 }, { size: 209, index: 5 },
      { size: 171, index: 19 }, { size: 65, index: 7 },
      { size: 57, index: 22 },  { size: 56, index: 0 },
      { size: 56, index: 31 },  { size: 49, index: 17 }
    ];
    let minSpeed = 391;  
    let maxSpeed = 901;
    let speedDecrease = 26;
    expect(
      findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease)
    ).toBe(1000);
  });
});
