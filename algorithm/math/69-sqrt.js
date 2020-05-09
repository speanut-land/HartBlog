/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = Math.floor(x / 2) + 1;
  while (left < right) {
    let mid = (left + right + 1) >> 1;
    let square = mid * mid;
    if (square > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

//the following is the Newton method in mathematical

var mySqrt = function (x) {
  if (x < 0) throw 'please input positive number';
  if (x == 0) return 0;
  let cur = 1;
  while (true) {
    pre = cur;
    cur = (cur + x / cur) / 2;
    if (Math.abs(cur - pre) < Number.EPSILON) return Math.floor(cur);
  }
};
