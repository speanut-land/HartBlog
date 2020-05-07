/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let dp = Array(days[days.length - 1] + 1).fill(0);
  for (const num of days) {
    dp[num] = Number.MAX_VALUE;
  }
  for (let i = 1; i <= dp.length - 1; i++) {
    if (dp[i] == 0) {
      dp[i] = dp[i - 1];
      continue;
    }
    let num1 = dp[i - 1] + costs[0];
    let num2 = i > 7 ? dp[i - 7] + costs[1] : costs[1];
    let num3 = i > 30 ? dp[i - 30] + costs[2] : costs[2];
    dp[i] = Math.min(num1, num2, num3);
  }
  return dp[dp.length - 1];
};
mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]);
