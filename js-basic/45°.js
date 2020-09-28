let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function unknow(arr) {
  let i = 0,
    j = 1;
  let n = arr.length,
    m = arr[0].length;
  let res = [arr[0][0]];
  while (i < n && j < m) {
    let tj = j;
    let ti = i;
    while (ti < n && tj >= 0) {
      res.push(arr[ti++][tj--]);
    }
    j < m - 1 ? j++ : i++;
  }
  return res;
}
console.log(unknow(arr));
