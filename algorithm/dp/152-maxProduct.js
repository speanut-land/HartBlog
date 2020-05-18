/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = (min = res = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    let tmp = min;
    min = Math.min(nums[i], max * nums[i], min * nums[i]);
    max = Math.max(nums[i], max * nums[i], tmp * nums[i]);
    res = Math.max(max, res);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Number.NEGATIVE_INFINITY;
  let min = 1;
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      [min, max] = [max, min];
    }
    max = Math.max(max * nums[i], nums[i]);
    min = Math.min(min * nums[i], nums[i]);

    res = Math.max(res, max);
  }
  return res;
};
