/* next max number after finding first max */

function secondMaxNumber(array) {
  if (array.length < 2) {
    return;
  }

  let max = (array[0] > array[1]) ? array[0] : array[1];
  let subMax = (array[0] > array[1]) ? array[1] : array[0];

  array.forEach(element => {
    if (element > max) {
      subMax = max;
      max = element;
    } else if (element > subMax  && element != max) {
      subMax = element;
    }
  });

  // array.forEach((element) => {
  //   max = max > element ? max : element;
  // });

  // array.forEach(element => {
  //   subMax = (subMax && element > subMax && element < max ||
  //             !subMax && element < max) ? element : subMax;
  // })

  return subMax;
}

module.exports = { secondMaxNumber };
