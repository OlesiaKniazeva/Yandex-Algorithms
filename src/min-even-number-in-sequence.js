function minEvenInSequence(array) {
  let minEven;

  array.forEach(element => {
    if (element % 2 === 0) {
      if (!minEven) {
        minEven = element;
      } else {
        minEven = (minEven > element) ? element : minEven;
      }
    }
  });

  return (minEven) ? minEven : -1;
}

module.exports = { minEvenInSequence };
