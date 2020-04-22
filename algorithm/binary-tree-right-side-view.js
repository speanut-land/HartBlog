/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    function dfs(root, layer) {
        if (!root) return;
        if (layer == res.length) {
            res.push(root.val);
        }
        layer += 1;
        dfs(root.right, layer);
        dfs(root.left, layer);
    }
    dfs(root, 0);
    return res;
};

//bfs by loop
var rightSideView = function(root) {
    if (!root) return [];
    let res = [],
        queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len) {
            let node = queue.shift();
            if (len == 1) {
                res.push(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            len--;
        }
    }
    return res;
};
