/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures1 = function (T) {
  let len = T.length;
  let res = new Array(len);
  res[len - 1] = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (T[j] > T[i]) {
        console.log(i, j);
        res[i] = j - i;
        break;
      }
      res[i] = 0;
    }
  }
  return res;
};
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures2 = function (T) {
  let res = new Array(T.length).fill(0);
  let stack = [];
  stack.push(0);
  for (let i = 1; i < T.length; i++) {
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      res[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(i);
  }
  return res;
};
dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]);
