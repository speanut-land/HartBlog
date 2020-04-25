/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let len = nums.length;
  if (len == 0) return [];
  let used = nums.map(_ => false);
  let res = [];
  dfs(nums, len, 0, [], used, res);
  function dfs(nums, len, depth, path, used) {
    if (depth == len) {
      res.push([...path]);
    }
    for (let i = 0; i < len; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        dfs(nums, len, depth + 1, path, used);
        used[i] = false;
        path.pop();
      }
    }
  }
  return res;
};
