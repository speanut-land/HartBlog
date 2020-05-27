/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let map = { 0: 1 };
  let preSum = 0,
    count = 0;
  for (const item of A) {
    preSum = (preSum + item) % K;
    if (preSum < 0) preSum += K;
    if (map[preSum]) count += map[preSum];
    if (map[preSum]) {
      map[preSum]++;
    } else {
      map[preSum] = 1;
    }
  }
  return count;
};

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let sum = 0;
  let map = new Map();
  let k = 0;
  for (var n of A) {
    sum += n;
    var key = ((sum % K) + K) % K;

    map.set(key, map.has(key) ? map.get(key) + 1 : 1);
  }
  map.has(0) ? (k += map.get(0)) : (k = 0);
  for (let [, value] of map) {
    //数组解构

    k += (value * (value - 1)) / 2;
  }
  return k;
};
