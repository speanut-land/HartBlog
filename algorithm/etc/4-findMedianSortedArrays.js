/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let totalLen = nums1.length + nums2.length;
  function getKthElement(nums1, nums2, k) {
    let m = nums1.length;
    let n = nums2.length;
    let index1 = 0,
      index2 = 0;
    while (true) {
      if (index1 == m) {
        return nums2[index2 + k - 1];
      }
      if (index2 == n) {
        return nums1[index1 + k - 1];
      }
      if (k == 1) {
        return Math.min(nums1[index1], nums2[index2]);
      }
      let newIndex1 = Math.min(Math.floor(index1 + k / 2 - 1), m - 1);
      let newIndex2 = Math.min(Math.floor(index2 + k / 2 - 1), n - 1);
      let pivot1 = nums1[newIndex1];
      let pivot2 = nums2[newIndex2];
      if (pivot1 <= pivot2) {
        k -= newIndex1 - index1 + 1;
        index1 = newIndex1 + 1;
      } else {
        k -= newIndex2 - index2 + 1;
        index2 = newIndex2 + 1;
      }
    }
  }
  if (totalLength % 2 == 1) {
    return getKthElement(nums1, nums2, (totalLength + 1) / 2);
  } else {
    return (getKthElement(nums1, nums2, totalLength / 2) + getKthElement(nums1, nums2, totalLength / 2 + 1)) / 2.0;
  }
};
