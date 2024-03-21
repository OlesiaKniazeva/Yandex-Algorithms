const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  let result = fileContent.toString().split("\n");

  return [result[0], result[1]];
  
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [str1, str2] = getInput();

  const result = isAnagram(
    str1, str2
  );

  sendOutput(result);
}

function isAnagram(str1, str2) {
  let data1 = findLettersAmount(str1);
  let data2 = findLettersAmount(str2);
  
  if (Object.keys(data1).length !== Object.keys(data2).length) {
    return 'NO';
  }

  for (let [key, value] of Object.entries(data1)) { 
    if (!data2[key] || data2[key] !== value) {
      return 'NO';
    }
  }

  return 'YES';
}

function findLettersAmount(str) {
  let data = {};  

  for (let letter of str) {
    
    if (data[letter]) {
      data[letter]++;
    } else {
      data[letter] = 1;
    }
  }
  
  return data;
}

module.exports = {isAnagram};