/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let temp = nums[i] + nums[j] + nums[k];
      if (temp === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) {
          j += 1;
        }
        while (j < k && nums[k] === nums[k - 1]) {
          k -= 1;
        }
        j += 1;
        k -= 1;
      } else if (temp < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};
let nums = [-1, 0, 1, 2, -1];
threeSum(nums);
