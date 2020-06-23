/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  let right = Math.max(...arr),
    left = 0;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    let sum = totalSum(arr, mid);
    if (sum < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let sumLow = target - totalSum(arr, left - 1);
  let sumHight = Math.abs(target - totalSum(arr, left));
  if (sumLow <= sumHight) {
    return left - 1;
  }
  return left;
};
function totalSum(arr, limitValue) {
  let sum = 0;
  for (const num of arr) {
    if (num > limitValue) {
      sum += limitValue;
    } else {
      sum += num;
    }
  }
  return sum;
}
let arr = [60864, 25176, 27249, 21296, 20204],
  target = 56803;
console.log(findBestValue(arr, target));
