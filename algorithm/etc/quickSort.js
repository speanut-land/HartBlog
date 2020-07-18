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
};

let items = [5, 3, 7, 6, 2, 9];
console.log(quickSort(items, 0, items.length - 1));
