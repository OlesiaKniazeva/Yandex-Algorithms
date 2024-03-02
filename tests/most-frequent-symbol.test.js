const {
  mostFrequentSymbolNonOptimal,
  mostFrequentSymbolMidOptimal,
  mostFrequentSymbolWithDictionary,
} = require("../src/most-frequent-symbol");

const functionsToTest = [
  { name: "NonOptimal", func: mostFrequentSymbolNonOptimal, skip: true },
  { name: "MidOptimal", func: mostFrequentSymbolMidOptimal, skip: true },
  { name: "DictOptimal", func: mostFrequentSymbolWithDictionary, skip: false },
];

functionsToTest.forEach(({ name, func, skip }) => {
  const describeFunc = skip ? describe.skip : describe;

  describeFunc(`mostFrequentSymbol${name}`, () => {
    test("Test case 1: Empty string", () => {
      expect(func("")).toBe(undefined);
    });

    test("Test case 2: Single character string", () => {
      expect(func("a")).toBe("a");
    });

    test("Test case 3: String with multiple characters", () => {
      expect(func("abca")).toBe("a");
    });

    test.skip("Test case 4: String with multiple characters and equal frequencies", () => {
      expect(func("abcde")).toBe("a");
    });

    test("Test case 5: String with special characters", () => {
      expect(func("a@b#c$d%@e")).toBe("@");
      expect(func("a@b#c$d%@ea@b#c$d%@ea@b#c$d%@e@")).toBe("@");
    });
  });
});
