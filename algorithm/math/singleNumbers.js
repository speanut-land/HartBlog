/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let temp = 0;
  nums.forEach(num => {
    temp ^= num;
  });
  let move = temp.toString(2).length - 1;
  let n = 0,
    m = 0;
  nums.forEach(num => {
    if ((num >> move) & 1) {
      n ^= num;
    } else {
      m ^= num;
    }
  });
  return [n, m];
};
