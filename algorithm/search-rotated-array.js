/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) return -1;
  let [l, r] = [0, nums.length];
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[0] <= mid[mid]) {
      if (nums[0] <= target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      console.log(nums[mid], l, r);
      if (nums[mid] < target && target <= nums[nums.length - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
// console.log(1 < 0 && 0 <= 2);
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
