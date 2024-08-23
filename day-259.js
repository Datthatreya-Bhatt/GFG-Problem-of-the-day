//      https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1




class Solution {
    leftView(root) {
        const m = {};
        
        function walk(n, level) {
            if (!n) {
                return;
            }
            m[level] = n.data;
            walk(n.right, level + 1);
            walk(n.left, level + 1);
        }
        
        walk(root, 0);
        return Object.keys(m).sort((a, b) => a - b).map(k => m[k]);
    }

}