/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left = 0,
    right = 0;
  let need = {};
  let window = {};
  let match = 0,
    start = 0,
    minLen = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < t.length; i++) {
    need[t[i]] ? need[t[i]]++ : (need[t[i]] = 1);
  }
  let needLen = Object.keys(need).length;
  while (right < s.length) {
    // c1是移入窗口的字符
    let c1 = s[right];

    // 进行窗口内数据的一系列更新
    if (need[c1]) {
      window[c1] ? window[c1]++ : (window[c1] = 1);
      if (window[c1] == need[c1]) {
        match++;
      }
    }
    right++; // 右移窗口

    // 判断左窗口是否要收缩
    while (match == needLen) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }

      // c2 是移出窗口的字符
      let c2 = s[left];

      // 进行窗口内数据的一系列更新
      if (need[c2]) {
        window[c2]--;
        if (window[c2] < need[c2]) {
          match--;
        }
      }
      left++; // 左移窗口
    }
  }
  // 返回最小覆盖子串
  return minLen == Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minLen);
};
