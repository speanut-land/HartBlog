/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let sum = 0;
  let pre = 2;
  let preTwo = 1;

  for (let i = 0; i < n - 2; i++) {
    sum = pre + preTwo;
    preTwo = pre;
    pre = sum;
  }
  return sum;
};
