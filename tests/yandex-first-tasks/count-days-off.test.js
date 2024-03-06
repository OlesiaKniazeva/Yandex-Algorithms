const { countDaysOff } = require("../../src/yandex-first-tasks/count-days-off");

describe("countDaysOff", () => {

  test("should return the correct number of days off", () => {
    const year = 2015;
    const holidaysDates = [
      [0, 1],
      [0, 8],
    ];
    const firstDayOfWeek = 4;
    const result = countDaysOff(year, holidaysDates, firstDayOfWeek);
    expect(result).toEqual(["Sunday", "Thursday"]);
  });

  it("should return the correct number of days off", () => {
    const year = 2013;
    const holidaysDates = [[ 0, 1 ], [ 0, 8 ], [ 0, 15] ];
    const firstDayOfWeek = 2;
    const result1 = countDaysOff(
      year,
      holidaysDates,
      firstDayOfWeek
    );
    expect(result1).toEqual(["Sunday", "Tuesday"]);
  });

  it("should return the correct number of days off", () => {
    const year = 2013;
    const holidaysDates = [[1, 6], [1, 13], [1, 20]];
    const firstDayOfWeek = 2;
    const result1 = countDaysOff(
      year,
      holidaysDates,
      firstDayOfWeek
    );
    expect(result1).toEqual(["Tuesday", "Wednesday"]);
  });
});
