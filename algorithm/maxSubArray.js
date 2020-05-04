/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for (const i of nums) {
    if (sum > 0) {
      sum += i;
    } else {
      sum = i;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};
