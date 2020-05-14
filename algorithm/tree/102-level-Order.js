/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  if (!root) return res;
  const q = [];
  q.push(root);
  while (q.length !== 0) {
    const currLevelSize = q.length;
    res.push([]);
    for (let i = 0; i < currLevelSize; i++) {
      const node = q.shift();
      res[res.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
};
