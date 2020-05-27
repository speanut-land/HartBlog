# 974-subarraysDivByK 

给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

**示例：**

```
输入：A = [4,5,0,-2,-3,1], K = 5
输出：7
解释：
有 7 个子数组满足其元素之和可被 K = 5 整除：
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

```

计算子数组 sum(i,j)之间的总和能否被5整除. sum(i,j) % K= (sum (0,j) - sum(0,i)) % K =  0  , 因此通过**hash table**记录前缀和,以空间换时间的方式,  sum(0,j)%K = sum(0,i) %K. 因此记录每次前i项的和的余数即可.

遇到相同的余数代表着该数组项Mod 5 = 0.

比如上方的示例:

0 :1

1: 4

2: 4  => count ++

3: 4  => count += (之前记录的数)  因为 [5] [0] 会产生 多一种排列方式 [5,0] 

以此类推,记录余数与数量直接的映射

```javascript
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let map = { 0: 1 };
  let preSum = 0,
    count = 0;
  for (const item of A) {
    preSum = (preSum + item) % K;
    if (preSum < 0) preSum += K;
    if (map[preSum]) count += map[preSum];
    if (map[preSum]) {
      map[preSum]++;
    } else {
      map[preSum] = 1;
    }
  }
  return count;
};
```

