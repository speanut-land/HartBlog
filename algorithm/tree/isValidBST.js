/**
 * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let pre = -Infinity;
var isValidBST = function(root) {
  if (!root) return true;
  if (!isValidBST(root.left)) return false;
  if (root.val <= pre) return false;
  pre = root.val;
  return isValidBST(root.right);
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
