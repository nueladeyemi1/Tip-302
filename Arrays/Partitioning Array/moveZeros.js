function moveZero(arr) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === 0) {
      //   console.log(indexOf(arr[i]));
      arr.splice(i, 1);
      arr.splice(0, 0, 0);
    }
  }
  console.log(arr);
}

moveZero([2, 4, 0, 3, 0, 1, 0]);
