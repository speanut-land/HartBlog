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
