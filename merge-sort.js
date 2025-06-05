let arr = [7, 5, 1, 3, 4, 2, 6, 8];
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let leftPart = arr.slice(0, middle);
  let rightPart = arr.slice(middle);
  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

function merge(left, right) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    mergedArr.push(left[i]);
    i++;
  }
  while (j < right.length) {
    mergedArr.push(right[j]);
    j++;
  }
  return mergedArr;
}

console.log(mergeSort(arr));
