/**
 * @param {character[][]} grid
 * @return {number}
 * 思路： 从第一个元素开始遍历，如果遇到1，先设置为0，当作已访问，然后递归其右边和下边的值
 */
var numIslands = function(grid) {
    let num = 0;
    if (grid && grid.length) {
        const maxI = grid.length - 1,
            maxJ = grid[0].length - 1;
        function overturn(i, j) {
            // 符合条件的翻转为'0'
            if (i > maxI || j > maxJ) return;
            if (grid[i][j] === "1") {
                grid[i][j] = "0";
                overturn(i + 1, j);
                overturn(i, j + 1);
            }
        }
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    num++;
                    overturn(i, j);
                }
            }
        }
    }
    return num;
};
console.log(
    numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ])
);
