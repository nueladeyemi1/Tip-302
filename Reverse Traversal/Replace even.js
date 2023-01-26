//Given an array of numbers, replace each even number with 2 of the same

function replaceEven(arr) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      arr.splice(i, 0, arr[i]);
    }
  }

  return arr;
}

replaceEven([2, 4, 1, 0, 3]);
