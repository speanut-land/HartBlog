/**
 * @param {number} n
 * @return {number}
 */
// solve this problem by mathematical artithmetic sequence
var waysToChange = function(n: number): number {
  let res: number = 0;
  for (let n25 = 0; n25 <= n / 25; n25++) {
    let temp = n - n25 * 25;
    res += Math.floor(((Math.floor(temp / 5) + 1 + (Math.floor((temp % 10) / 5) + 1)) * (Math.floor(temp / 10) + 1)) / 2);
  }

  return res % 1000000007;
};

// by dynamic programming
var waysToChange = function(n: number): number {
  const coins = [1, 5, 10, 25];
  const dp = [...Array(n + 1)].map(_ => 0);
  dp[0] = 1;
  for (const i of coins) {
    for (let j = i; j <= n; ++j) {
      dp[j] = dp[j] + dp[j - i];
    }
  }
  return dp[n] % 1000000007;
};
console.log(waysToChange(5));
