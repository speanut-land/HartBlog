/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let res = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      console.log(res);
      res[j] += res[j - 1];
    }
  }
  return res[res.length - 1];
};
console.log(uniquePaths(7, 3));
