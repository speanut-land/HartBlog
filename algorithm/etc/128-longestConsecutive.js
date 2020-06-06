/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let longestStreak = 0;
  for (const num of numSet) {
    if (!numSet.has(numSet - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};
