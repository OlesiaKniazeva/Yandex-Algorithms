const { fileFormatting } = require('../src/file-formatting');

describe('fileFormatting', () => {
  it('should return the number of spaces for strings', () => {
    const spacesForStrings = [1, 4, 12, 9, 0];
    const result = fileFormatting(spacesForStrings);
    expect(result).toBe(8);
  });

    it('right number if only tabs should be used', () => {
      const spacesForStrings = [4, 8, 12];
      const result = fileFormatting(spacesForStrings);
      expect(result).toBe(6);
    });

    it('combination of space and tab', () => {
      const spacesForStrings = [5, 7];
      const result = fileFormatting(spacesForStrings);
      expect(result).toBe(5);
    });

  it('should return 0 if the array is empty', () => {
    const spacesForStrings = [];
    const result = fileFormatting(spacesForStrings);
    expect(result).toBe(0);
  });

  it('should return 0 if all elements in the array are 0', () => {
    const spacesForStrings = [0, 0, 0, 0];
    const result = fileFormatting(spacesForStrings);
    expect(result).toBe(0);
  });

  it('should return the number of spaces for strings', () => {
    const spacesForStrings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = fileFormatting(spacesForStrings);
    expect(result).toBe(23);
  });

  it('case when better press tab and backspace', () => {
    const spacesForStrings = [0, 1, 2, 3, 1000000000];
    const result = fileFormatting(spacesForStrings);
    expect(result).toBe(250000005);
  })

  it('firsly tab + backspace, later 4 tabs', () => {
    const spacesForStrings = [11];
    const result = fileFormatting(spacesForStrings);
    expect(result).toBe(4);
  })

});
