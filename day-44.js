//  https://www.geeksforgeeks.org/problems/distribute-candies-in-a-binary-tree/1



class Solution {
    distributeCandy(root) {
        const dfs = (node = root) => {
            if (!node) {
                return [0, 0, 0];
            }
            const l = dfs(node.left);
            const r = dfs(node.right);
            const res = Math.abs(l[0] - l[1] + r[0] - r[1] + node.data - 1);
            return [l[0] + r[0] + node.data, l[1] + r[1] + 1, res + l[2] + r[2]];
        };
        return dfs(root.left)[2] + dfs(root.right)[2];
    }
}