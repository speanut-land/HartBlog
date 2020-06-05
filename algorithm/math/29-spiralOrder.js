/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;
  let currentPoint = 0;
  let res = new Array((right + 1) * (bottom + 1));
  while (true) {
    for (let i = left; i <= right; i++) {
      res[currentPoint++] = matrix[top][i];
    }
    if (++top > bottom) break;
    for (let i = top; i <= bottom; i++) {
      res[currentPoint++] = matrix[i][right];
    }
    if (left > --right) break;
    for (let i = right; i >= left; i--) {
      res[currentPoint++] = matrix[bottom][i];
    }
    if (top > --bottom) break;
    for (let i = bottom; i >= top; i--) {
      res[currentPoint++] = matrix[i][left];
    }
    if (++left > right) break;
  }
  return res;
};
