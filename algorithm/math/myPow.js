/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// recursively solve this problem
var myPow = function (x, n) {
  if (n >= 0) return quickPow(x, n);
  return 1 / quickPow(x, -n);
};

function quickPow(x, n) {
  if (n === 0) return 1;
  let y = quickPow(x, Math.floor(n / 2));
  return n % 2 === 0 ? y * y : y * y * x;
}

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function quickMul(x, N) {
    let ans = 1;
    let x_contribute = x;
    while (N > 0) {
      if (N % 2 == 1) {
        ans *= x_contribute;
      }
      x_contribute *= x_contribute;
      N = Math.floor(N / 2);
    }
    return ans;
  }
  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};
