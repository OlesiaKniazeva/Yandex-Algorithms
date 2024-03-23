const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("input.txt", "utf8");

  let result = fileContent.split("\n");

  let dictArray = result[0].split(" ");
  let words = result[1].split(" ");

  return [dictArray, words];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.join(" "));
}

function program() {
  let [dict, words] = getInput();

  let result = changeWords(dict, words);

  sendOutput(result);
}

function changeWords(dictArray, words) {
  let dict = createDictionary(dictArray);
  // console.log(dict);

  for (let i = 0; i < words.length; ++i) {
    let word = words[i];

    let dictData = dict[word[0]];

    if (dictData) {
      for (let item of dictData) {
        if (word.startsWith(item)) {
          words[i] = item;
          break;
        }
      }
    }
  }

  return words;
}

function createDictionary(dictArray) {
  let dict = {};

  for (let i = 0; i < dictArray.length; ++i) {
    let word = dictArray[i];

    if (dict[word[0]]) {
      dict[word[0]].push(word);
    } else {
      dict[word[0]] = [];
      dict[word[0]].push(word);
    }
  }

  for (let key in dict) {
    dict[key].sort();
  }

  return dict;
}

module.exports = { changeWords };
