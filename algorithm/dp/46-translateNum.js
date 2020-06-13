/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  if (num <= 9) return 1;
  let ba = num % 100;
  if (ba <= 9 || ba >= 26) {
    return translateNum(num / 10);
  }
  return translateNum(num / 10) + translateNum(num / 100);
};

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let str = String(num);
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == "0" || str.substr(i - 1, 2) > "25") {
      dp[i + 1] = dp[i];
    } else {
      dp[i + 1] = dp[i] + dp[i - 1];
    }
  }
  return dp[dp.length - 1];
};
