function moveZero(arr) {
  let i = 0;
  let j = 0;
  while (j < arr.length) {
    if (arr[i] !== 0) {
      i++;
    } else if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
    j++;
    console.log(arr);
  }
  return arr;
}

console.log(moveZero([0, 1, 0, 3, 12]));
