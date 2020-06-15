/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  var result = "";
  for (
    let i = 0;
    i < strs[0].length && strs.every((str) => str[i] == strs[0][i]);
    i++
  ) {
    result += strs[0][i];
  }
  return result;
};
