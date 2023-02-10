const dutchNationalFlag = function(arr, pivot) {
  let lowBoundary = 0;
  let highBoundary = arr.length - 1;
  let i = 0;

  while (i <= highBoundary) {
    if (arr[i] < pivot) {
      swap(i, lowBoundary);
      lowBoundary += 1;
      i++;
    } else if (arr[i] > pivot) {
      swap(i, highBoundary);
      highBoundary -= 1;
    } else {
      i++;
    }
  }
};

function swap(arr, i) {}
