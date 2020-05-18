/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0,
    cur = 0;
  let mp = new Map();
  mp.set(0, 1);
  for (const x of nums) {
    cur += x;
    if (mp.has(cur - k)) count += mp.get(cur - k);
    if (mp.has(cur)) mp.set(cur, mp.get(cur) + 1);
    else mp.set(cur, 1);
  }
  return count;
};
subarraySum([1, 1, 1], 2);
const mp = new Map();
mp.set(0, 1);
let count = 0,
  pre = 0;
for (const x of nums) {
  pre += x;
  if (mp.has(pre - k)) count += mp.get(pre - k);
  if (mp.has(pre)) mp.set(pre, mp.get(pre) + 1);
  else mp.set(pre, 1);
}
return count;
