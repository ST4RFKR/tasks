/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    let stack = [root.left, root.right];

    while (stack.length) {
        let r = stack.pop();
        let l = stack.pop();

        if (!r && !l) continue;
        if (!r || !l) return false;
        if (l.val !== r.val) return false;


        stack.push(l.left, r.right);
        stack.push(l.right, r.left);
    }

    return true;
};