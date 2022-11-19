const intToRoman = function (num) {
  const representation = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  console.log(representation[num]);

  const length = Object.keys(representation);

  console.log(length);
  for (let i = 0; i < length; i++) {
    // console.log(representation.num);
  }
};

intToRoman(3);
