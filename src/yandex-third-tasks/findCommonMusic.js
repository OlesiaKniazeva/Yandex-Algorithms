const fs = require('node:fs');

program();

function getInput(testData) {
  let result;

  if (!testData) {
    let fileContent = fs.readFileSync('./input.txt', 'utf8');
    result = fileContent.split('\n');
  } else {
    result = testData;
  }

  let peopleAmount = Number(result[0]);

  if (peopleAmount === 1) {
    let arrayData = result[2].split(' ');

    return [peopleAmount, arrayData];
  }
  let data = {};
  
  for (let i = 0; i < peopleAmount; ++i) {
    let content = result[2 + i * 2].split(' ')
    for (let track of content) {
      if (data[track]) {
        data[track]++;
      } else {
        data[track] = 1;
      }
    }
  }

  return [peopleAmount, data];
}

function sendOutput(result) {
  fs.writeFileSync('./output.txt', result);
}


function program() {
  let [peopleAmount, data] = getInput();

  let result = findCommonTracks(peopleAmount, data);

  sendOutput(result);
}

function findCommonTracks(peopleAmount, data) {
  if (peopleAmount === 1) {
    return data.length + '\n' + data.sort().join(' ');
  }

  let result = [];

  for (let track in data) {
    
    if (data[track] === peopleAmount) {
      result.push(track);
    }
  }
  
  return result.length + '\n' + result.sort().join(' ');
}

module.exports = {getInput, findCommonTracks};