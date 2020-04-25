/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let res = 0;
  function merge(leftArr, rightArr) {
    let result = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
      if (leftArr[0] > rightArr[0]) {
        //除去left和right队头相等少一个的情况
        res += leftArr.length;
        if (leftArr[0] === rightArr[0]) {
          res -= 1;
        }
        result.push(rightArr.shift());
      } else {
        result.push(leftArr.shift());
      }
    }
    return result.concat(leftArr).concat(rightArr);
  }
  function mergeSort(array) {
    if (array.length == 1) return array;
    var middle = Math.floor(array.length / 2); //求出中点
    var left = array.slice(0, middle); //分割数组
    var right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right)); //递归合并与排序
  }
  mergeSort(nums);
  return res;
};
console.log(reversePairs([1, 1, 1, 1, 1])); // [12, 32, 36, 45, 56, 76, 78]
