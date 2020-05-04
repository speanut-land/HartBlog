/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  let left = 0;
  let lookup = new Set();
  max_len = 0;
  cur_len = 0;
  for (let i = 0; i < s.length; i++) {
    cur_len += 1;
    while (lookup.has(s[i])) {
      lookup.delete(s[left]);
      left += 1;
      cur_len -= 1;
    }
    max_len = cur_len > max_len ? cur_len : max_len;
    lookup.add(s[i]);
  }
  return max_len;
};
