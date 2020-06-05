/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  let left = new Array(len),
    right = new Array(len),
    ans = new Array(len);
  left[0] = 1;
  for (let i = 1; i < len; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  right[len - 1] = 1;
  for (let i = len - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < len; i++) {
    ans[i] = right[i] * left[i];
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  let ans = new Array(len);
  ans[0] = 1;
  for (let i = 1; i < len; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    ans[i] = right * ans[i];
    right = nums[i] * right;
  }
  return ans;
};
