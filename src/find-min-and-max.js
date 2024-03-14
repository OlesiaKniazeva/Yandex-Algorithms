function minAndMax(array) {
  let min = [];
  let max = [];
  let last;

  if (array.length < 2) {
    return;
  }
  if (array.length === 2) {
    return minAndMaxInPair(array[0], array[1]);
  }

  if (array.length % 2 !== 0) {
    last = array.pop();
  }
  for (let i = 0; i < array.length; ++i) {
    let data = minAndMaxInPair(array[i], array[i + 1]);
    min.push(data[0]);
    max.push(data[1]);
  }

  let res1 = findMin(min);
  let res2 = findMax(max);

  if (last) {
    res1 = res1 < last ? res1 : last;
    res2 = res2 > last ? res2 : last;
  }
  return [res1, res2];
}

function findMin(array) {
  let min = array[0];

  array.forEach((element) => {
    min = element < min ? element : min;
  });
  return min;
}

function findMax(array) {
  let max = array[0];

  array.forEach((element) => {
    max = element > max ? element : max;
  });
  return max;
}

function minAndMaxInPair(first, second) {
  return first > second ? [second, first] : [first, second];
}


module.exports = {minAndMax, findMin, findMax, minAndMaxInPair};