/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let res = 0;
  let stack = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        res = Math.max(res, i - stack[stack.length - 1]);
      }
    }
  }
  return res;
};
console.log(longestValidParentheses("(()"));
var longestValidParentheses = function (s) {
  let left = 0,
    right = 0,
    res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      res = Math.max(res, 2 * right);
    } else if (right > left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "(") {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      res = Math.max(res, 2 * left);
    } else if (left > right) {
      left = right = 0;
    }
  }
  return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let res = 0;
  let dp = new Array(s.length);
  for (let i = 1; i < s.length(); i++) {
    if (s[i] == ")") {
      if (s[i - 1] == "(") {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == "(") {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      res = Math.max(res, dp[i]);
    }
  }
  return res;
};
