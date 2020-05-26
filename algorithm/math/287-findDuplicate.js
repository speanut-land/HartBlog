/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let len = nums.length;
  let left = 1,
    right = len - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let cnt = 0;
    for (const num of nums) {
      if (num <= mid) {
        cnt++;
      }
    }
    if (cnt > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[slow]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
