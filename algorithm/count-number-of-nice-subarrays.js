/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 思路 ：先过滤出为奇数值的下标，然后判断每一个奇数值i到之后的i+k-1的奇数值下标的个数，
 * 个数为(oddArr[i ] - oddArr[i - 1]) * (oddArr[i + k] - oddArr[i + k - 1]);
 */
var numberOfSubarrays = function(nums, k) {
    let oddArr = [];
    oddArr.push(-1);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            oddArr.push(i);
        }
    }
    oddArr.push(nums.length);
    for (let i = 1; i < oddArr.length - k; i++) {
        res +=
            (oddArr[i] - oddArr[i - 1]) * (oddArr[i + k] - oddArr[i + k - 1]);
    }
    return res;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1]));
