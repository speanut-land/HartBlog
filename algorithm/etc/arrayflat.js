let arr = [1, 2, 3, 4, [23, 34, 5, [23, 452, 123]]];

function arrayFlat(arr) {
  let res = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      res = res.concat(arrayFlat(i));
    } else {
      res.push(i);
    }
  }
  return res;
}

let sortArr = [23, 5, 3, 10, 3, 5, 2, 6];
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midItem = arr.splice(arr.length >> 1, 1)[0];
  let left = [];
  let right = [];
  for (const i of arr) {
    if (i < midItem) {
      left.push(i);
    } else {
      right.push(i);
    }
  }
  return quickSort(left).concat([midItem], quickSort(right));
}
console.log(quickSort([5, 3, 3, 5, 6]));
