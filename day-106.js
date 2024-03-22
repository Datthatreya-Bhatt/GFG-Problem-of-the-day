//   https://www.geeksforgeeks.org/problems/diagonal-sum-in-binary-tree/1




class Solution {
    diagonalSum(root) {
        //code here
        const ans = {};

        function find(node, level) {
            if (!node) return node;
            
            if (level in ans) {
                ans[level] += node.data;
            } else {
                ans[level] = node.data;
            }
            
            find(node.left, level + 1);
            find(node.right, level);
        }
        
        find(root, 0);
        
        return Object.values(ans);
    }
}




