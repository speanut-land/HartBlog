/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 递归解决， 每一次判断最大的深度值，
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let max = 0;
    for (let i = 0; i < root.children.length; i++) {
        let item = maxDepth(root.children[i]);
        max = item > max ? item : max;
    }
    return max + 1;
};
