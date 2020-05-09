/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || matrix.length < 1 || matrix[0].length < 1) return 0;
  let row = matrix.length;
  let col = matrix[0].length;
  let maxSide = 0;

  // let northwest = 0;
  let dp = Array(row + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(col + 1).fill(0);
  }
  // for (const item of matrix) {
  //   northwest = 0;
  //   for (let i = 0; i < col; i++) {
  //     let nextNorthwest = dp[i + 1];
  //     if (item[i] === '1') {
  //       dp[i + 1] = Math.min(dp[i], dp[i + 1], nextNorthwest) + 1;
  //       maxSide = Math.max(maxSide, dp[i + 1]);
  //     } else {
  //       dp[i + 1] = 0;
  //     }
  //     northwest = nextNorthwest;
  //   }
  // }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j], dp[i][j + 1], dp[i][j]) + 1;
        maxSide = Math.max(maxSide, dp[i + 1][j + 1]);
      }
    }
  }
  return maxSide * maxSide;
};

maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]);
