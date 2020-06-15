let arr = [5, 4, 3, 57, 7, 11, 34, 16, 13, 48, 56];

function divider(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.length >> 1;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return MergeSort(divider(left), divider(right));
}

function MergeSort(left, right) {
  let res = [];
  let i = 0;
  while (left.length && right.length) {
    if (left[i] < right[i]) {
      res.push(left.shift());
    } else res.push(right.shift());
  }
  return res.concat(left, right);
}

console.log(divider(arr));
