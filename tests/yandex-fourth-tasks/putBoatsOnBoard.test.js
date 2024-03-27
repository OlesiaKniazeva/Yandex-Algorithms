const {
  totalSpaceTaken, countBoatsAmount
} = require("../../src/yandex-fourth-tasks/putBoatsOnBoard");

// describe("totalSpaceTaken", () => {
//   test("total sum count right", () => {
//     expect(totalSpaceTaken(0)).toBe(0);
//     expect(totalSpaceTaken(1)).toBe(1);
//     expect(totalSpaceTaken(2)).toBe(4 + 2);
//     expect(totalSpaceTaken(3)).toBe(3 + 2 * 2 + 1 * 3 + 5);
//     expect(totalSpaceTaken(4)).toBe(1 * 4 + 2 * 3 + 3 * 2 + 4 * 1 + 9);
//   });
// });

describe('countBoatsAmount', () => {
  test('count right coefficient', () => {

    expect(countBoatsAmount(1)).toBe(1);

    expect(countBoatsAmount(2)).toBe(1);
    expect(countBoatsAmount(3)).toBe(1);
    expect(countBoatsAmount(4)).toBe(1);
    expect(countBoatsAmount(5)).toBe(1);
    expect(countBoatsAmount(6)).toBe(2);
    expect(countBoatsAmount(7)).toBe(2);
    expect(countBoatsAmount(14)).toBe(2);
    expect(countBoatsAmount(15)).toBe(3);
    expect(countBoatsAmount(1616161661)).toBe(2130);
    expect(countBoatsAmount('117055765888857794')).toBe(888887);
    
  })
}) 
