// const exist = function (board, word) {
//   const theWord = [...word];

//   //   board.flat(Infinity).
//   for (let i = 0; i < board.length; i++) {
//     //.log(board[i][board[i].length - 1], board[i + 1][0]);

//     board[i].forEach(element => {
//       if (theWord.includes(element)) {
//         theWord.splice(theWord.indexOf(element), 1);
//       }
//     });

//     if (
//       theWord.includes(board[i][board[i].length - 1]) &&
//       theWord.includes(board[i + 1][0])
//     )
//       console.log(false);
//   }

//   console.log(theWord);
//   if (theWord.length === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

//console.log(board[i][board[i].length - 1], board[i + 1][0]);
//.log(board[i][board[i].length - 1], board[i + 1][0]);
//   board.flat(Infinity).
// wordContainer.splice(theWord.indexOf(element), 1, element);
// wordContainer.push(element);

//////////////////////////////////////////////////////////////////////

const exist = function (board, word) {
  const theWord = [...word];
  const theWord1 = [...word];

  for (let i = 0; i < board.length; i++) {
    board[i].forEach(element => {
      if (theWord.includes(element)) {
        theWord.splice(theWord.indexOf(element), 1);
      }
    });

    if (
      theWord1.includes(board[i][board[i].length - 1]) &&
      theWord1.includes(board?.[i + 1]?.[0])
    )
      console.log(false);
  }

  console.log(theWord);
  if (theWord.length === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCB'
);

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCCED'
);

exist(
  [
    ['a', 'b'],
    ['c', 'd'],
  ],
  'abcd'
);

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'SEE'
);
