/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (!s) return false;

  function check(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.val === b.val) return check(a.left, b.left) && check(a.right, b.right);
  }
  return check(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};
