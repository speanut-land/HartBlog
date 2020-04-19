/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 思路 与上一个值做比较  如果边界不相交 直接推入result 还需考虑包含的情况 如果包含则更新右边界
 */
var merge = function(intervals) {
    if (intervals.length == 0) return [];
    var res = [];
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    });
    res.push(intervals[0]);
    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > res[res.length - 1][1]) res.push(intervals[i]);
        else if (res[res.length - 1][1] < intervals[i][1])
            res[res.length - 1][1] = intervals[i][1];
    }
    return res;
};
console.log(
    merge([
        [1, 4],
        [0, 2],
        [3, 5]
    ])
);
