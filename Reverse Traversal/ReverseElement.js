//Reverse the element of an array.

const reverseElement = function(arr) {
  let start = 0;
  for (let i = arr.length; i >= 0; i--) {
    let temp = arr[start];
    arr[start] = arr[i];
    arr[i] = temp;
    start++;
  }

  console.log(arr);
};

reverseElement([1, 4, 2, 7, 3]);
