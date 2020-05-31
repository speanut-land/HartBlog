/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let len = heights.length;
  let left = new Array(len),
    right = new Array(len);
  let stack = [];
  for (let i = 0; i < len; ++i) {
    while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  stack = [];
  for (let i = len - 1; i >= 0; --i) {
    while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? len : stack[stack.length - 1];
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < len; ++i) {
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights) {
    return 0;
  }
  heights.unshift(0);
  heights.push(0);
  const stack = [];
  let area = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      let curr = stack[stack.length - 1];
      stack.pop();
      let left = stack.length === 0 ? 0 : stack[stack.length - 1] + 1;
      let right = i - 1;
      area = Math.max(area, (right - left + 1) * heights[curr]);
    }
    stack.push(i);
  }
  return area;
};

var largestRectangleArea = function(heights) {
  let len = heights.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    let height = heights[i];
    let left = i,
      right = i;
    while (left - 1 >= 0 && height[left - 1] >= height) {
      --left;
    }
    while (right + 1 < len && heights[right + 1] >= height) {
      ++right;
    }
    ans = Math.max(ans, (right - left + 1) * height);
  }
  return ans;
};
