/**
 * @param {string} string
 * @return {symbol}
 */
var mostFrequentSymbolNonOptimal = function (string) {
  let symbol = string[0];
  let amount = 0;
  for (let i = 0; i < string.length; ++i) {
    let regex = new RegExp(string[i], "g");
    let matches = string.match(regex);
    let currentAmount = matches ? matches.length : 0;

    if (currentAmount > amount) {
      symbol = string[i];
      amount = currentAmount;
    }
  }
  return symbol;
};

/**
 * @param {string} string
 * @return {symbol}
 */
var mostFrequentSymbolMidOptimal = function (string) {
  let amount = 0;
  let currentSymbol = string[0];

  const uniqueSymbols = new Set(string); 

  for (let i = 0; i < uniqueSymbols.size; ++i) {
    let currentAmount = 0;
    const regex = new RegExp(string[i], "g");
    currentAmount = string.match(regex).length;

    if (amount < currentAmount) {
      amount = currentAmount;
      currentSymbol = string[i];
    }
  }
  return currentSymbol;
};

var mostFrequentSymbolWithDictionary = function(string) {
  let dict = Object();

  let biggestAmount = 0
  let resultSymbol;

  for (let i = 0; i < string.length; ++i) {
    if (dict[string[i]]) {
      dict[string[i]]++;
    } else {
      dict[string[i]] = 1;
    }

    if (dict[string[i]] > biggestAmount) {
      biggestAmount = dict[string[i]];
      resultSymbol = string[i];
    }
  }

  return resultSymbol;
}

module.exports = { mostFrequentSymbolNonOptimal, mostFrequentSymbolMidOptimal, mostFrequentSymbolWithDictionary };
