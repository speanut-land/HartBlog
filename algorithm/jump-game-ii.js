/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let end = 0;
  let maxPosition = 0;
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, nums[i] + i);
    if (i == end) {
      end = maxPosition;
      ++step;
    }
    console.log(end, maxPosition, step);
  }

  return step;
};
/**
 * each item compare maxPositon and current reached position
 * record the max distance that can be reached :  maxPosition
 * if reached postion step increase 1，and update end position
 */
console.log(jump([1, 2, 3]));
