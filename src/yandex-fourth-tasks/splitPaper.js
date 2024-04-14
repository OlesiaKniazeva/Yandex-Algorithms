const fs = require('node:fs');

program();

function getInput() {
  const fileContent = fs.readFileSync('input.txt', 'utf-8').split('\n');

  let [width, wordsAmount1, wordsAmount2] = fileContent[0].split(' ').map(el => Number(el)); 

  let words1Lenghts = fileContent[1].split(' ').map(el => Number(el));
  let words2Lenghts = fileContent[2].split(' ').map(el => Number(el));

  return [width, words1Lenghts, words2Lenghts];
}

function sendOutput(result) {
  fs.writeFileSync('output.txt', result.toString());
}

function program() {
  let [width, words1Lenghts, words2Lenghts] = getInput();

  let result = findMinHeight(width, words1Lenghts, words2Lenghts);

  sendOutput(result);
}

function findMinHeight(width, words1Lenghts, words2Lenghts) {
  // console.log(width);
  // console.log(words1Lenghts);
  // console.log(words2Lenghts);
  
  
  let firstMinWidth = Math.max(...words1Lenghts);
  let secondMinWidth = Math.max(...words2Lenghts);

  // console.log("firstMinWidth", firstMinWidth);
  // console.log("secondMinWidth", secondMinWidth);
  
  
  let left = firstMinWidth;
  let right =  width - secondMinWidth;

  // console.log('-----------');

  let minHeight;

  let edgeHeight1 = findHeight(words1Lenghts, firstMinWidth);
  let edgeHeight2 = findHeight(words2Lenghts, width - firstMinWidth);
  let edgeRes = (edgeHeight1 > edgeHeight2) ? edgeHeight1 : edgeHeight2;
  
  // console.log(edgeHeight1);
  // console.log(edgeHeight2);

  // console.log('-----------');

  let edge2Height1 = findHeight(words1Lenghts, width - secondMinWidth);
  let edge2Height2 = findHeight(words2Lenghts, secondMinWidth);

  // console.log(edge2Height1);
  // console.log(edge2Height2);

  let edgeRes2 = (edgeHeight1 > edgeHeight2) ? edgeHeight1 : edgeHeight2;

  minHeight = (edgeRes > edgeRes2) ? edgeRes2 : edgeRes;
  



  while (left < right) {
    // console.log("left: ", left, "right:", right);
    
    let middle = Math.floor((left + right + 1) / 2);
    // console.log("middle: ", middle);
    

    let height1 = findHeight(words1Lenghts, middle);
    let height2 = findHeight(words2Lenghts, width - middle);
    // console.log('height1', height1);
    // console.log('height2', height2);
    
    let resHeight = (height1 > height2) ? height1 : height2;
    minHeight = (minHeight > resHeight) ? resHeight : minHeight;

    if (height1 > height2) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }

  return minHeight;
}

function findHeight(array, givenWidth) {
  let height = 1;

  let rowWidth = array[0];

  for (let i = 1; i < array.length; ++i) {
    if (rowWidth + array[i] + 1 > givenWidth) {
      height++;
      rowWidth = array[i];
    } else {
      rowWidth += array[i] + 1
    }
  }
  return height;
}

module.exports = {findHeight, findMinHeight}