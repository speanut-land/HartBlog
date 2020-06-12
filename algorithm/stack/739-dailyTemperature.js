/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
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
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
