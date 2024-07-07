//      https://www.geeksforgeeks.org/problems/ancestors-in-binary-tree/1


class Solution {
    dfs(root, target, ans) {
        if (root) {
            if (root.data === target) {
                return true;
            }
            ans.unshift(root.data);
            if (this.dfs(root.left, target, ans)) {
                return true;
            }
            if (this.dfs(root.right, target, ans)) {
                return true;
            }
            ans.shift();
        }
    }

    Ancestors(root, target) {
        const ans = [];
        this.dfs(root, target, ans);
        return ans;
    }
}
