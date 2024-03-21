const fs = require("node:fs");

program();

function getInput() {
  const fileContent = fs.readFileSync("input.txt", "utf8");

  const result = fileContent.split("\n");

  return result[1].split(" ").map((el) => Number(el));
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let numbers = getInput();

  let result = findAmountToRemove(numbers);  

  sendOutput(result);
}

function findAmountToRemove(numbers) {  
  // console.log("len", numbers.length);
  
  
  let occurrences = {};

  for (let number of numbers) {
    if (occurrences[number]) {
      occurrences[number]++;
    } else {
      occurrences[number] = 1;
    }
  }

  let objectLength = Object.keys(occurrences);
  
  if (objectLength.length < 2) {    
    return 0;
  }  

  let singleMaxData = 0;
  let pairMaxData = 0;

  for (let [key, value] of Object.entries(occurrences)) {
    singleMaxData = (singleMaxData < value) ? value : singleMaxData;

    let prevIdxAmount = occurrences[Number(key) + 1];
    let nextIdxAmount = occurrences[Number(key) - 1];
    // console.log("prev",prevIdxAmount);
    // console.log("next", nextIdxAmount);
    
    let prevData = (prevIdxAmount) ? prevIdxAmount : 0;
    let nexData = (nextIdxAmount) ? nextIdxAmount : 0;
  
    let currentData = (prevData > nexData) ? prevData + value : nexData + value;
    pairMaxData = (currentData > pairMaxData) ? currentData : pairMaxData;
  }

  // console.log("max pair", pairMaxData);
  // console.log("max single", singleMaxData);

  return (pairMaxData > singleMaxData) ? numbers.length - pairMaxData : numbers.length - singleMaxData;
}

module.exports = { findAmountToRemove };
