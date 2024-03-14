const { secondMaxNumber } = require('../src/second-max-num');

describe('secondMaxNumber', () => {
  it('should return the second maximum number in the array', () => {
    expect(secondMaxNumber([1, 2, 3, 4, 5])).toBe(4);
    expect(secondMaxNumber([10, 5, 8, 3, 9])).toBe(9);
    expect(secondMaxNumber([7, 2, 1, 6, 4])).toBe(6);
  });

  it('should return undefined if the array has less than 2 elements', () => {
    expect(secondMaxNumber([1])).toBeUndefined();
    expect(secondMaxNumber([])).toBeUndefined();
  });

  it('should handle negative numbers correctly', () => {
    expect(secondMaxNumber([-5, -2, -10, -8])).toBe(-5);
    expect(secondMaxNumber([-1, -3, -2])).toBe(-2);
  });

  // it('should work if several max', () => {
  //   expect(secondMaxNumber([5, 2, 3, 4, 5])).toBe(4);
  //   expect(secondMaxNumber([5, 5, 5, 5, 5])).toBeUndefined();
  // });

  // it('should work if several submax', () => {
  //   expect(secondMaxNumber([5, 4, 3, 4, 5])).toBe(4);
  //   expect(secondMaxNumber([5, 4, 5, 4, 5])).toBe(4);
  // });

});
