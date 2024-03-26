const fs = require('node:fs');

program();

function getInput() {
  let fileContent = fs.readFileSync('input.txt', 'utf-8').split('\n');

  let dotsAmount = fileContent[0];

  let coordinates = [];
  let xDict = {};
  let yDict = {};

  for (let i = 1; i <= dotsAmount; ++i) {
    let [x, y] = fileContent[i].split(' ').map(el => Number(el));
    coordinates.push([x, y]);

    if (xDict[x]) {
      xDict[x].push([x, y]);
    } else {
      xDict[x] = [];
      xDict[x].push([x, y]);
    }

    if (yDict[y]) {
      yDict[y].push([x, y]);
    } else {
      yDict[y] = [];
      yDict[y].push([x, y]);
    }
  }
  return [coordinates, xDict, yDict];
}

function program() {
  let [coordinates, xDict, yDict] = getInput();

  let result = findDotsToMakeSquare(coordinates, xDict, yDict);
}

function findDotsToMakeSquare(coordinates, xDict, yDict) {
  console.log(coordinates);
  console.log(xDict);
  console.log(yDict);
  
  

  let pairs = makePairs(coordinates);

  console.log(pairs);

  for (let [a, b] of pairs) {
    let [x1, y1] = a;
    let [x2, y2] = b;
    
    // if ()
    
    
  }
  

  
}

function makePairs(coordinates) {
  let pairs = [];

  for (let i = 0; i < coordinates.length; ++i) {
    for (let j = i + 1; j < coordinates.length; ++j) {
      let [x1, y1] = coordinates[i];
      let [x2, y2] = coordinates[j];
      (x1 < x2) ? pairs.push([coordinates[i], coordinates[j]]) :  pairs.push([coordinates[j], coordinates[i]]);
    }
  }
  return pairs;
}