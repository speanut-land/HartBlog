let partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i] < pivot) i++;
    while (items[j] > pivot) j--;
    if (i <= j) {
      [items[j], items[i]] = [items[i], items[j]];
      i++;
      j--;
    }
  }
  return i;
};

let quickSort = (items, left, right) => {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
  function partition(arr, left, right) {
    let pivot = arr[(left + right) >>> 1];
    let i = left,
      j = right;
    while (i <= j) {
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    console.log(arr);
    return i;
  }
};

let items = [5, 3, 7, 6, 2, 9];
console.log(quickSort(items, 0, items.length - 1));

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
