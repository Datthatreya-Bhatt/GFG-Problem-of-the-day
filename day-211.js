//          https://www.geeksforgeeks.org/problems/vertical-width-of-a-binary-tree/1



class Solution {
    // Function to find the vertical width of a Binary Tree.
    verticalWidth(root) {
        if (!root) return 0;
    
        let min1 = 0, max1 = 0;
    
        function fun(node, pos) {
            if (!node) return;
    
            min1 = Math.min(min1, pos);
            max1 = Math.max(max1, pos);
    
            fun(node.left, pos - 1);
            fun(node.right, pos + 1);
        }
    
        fun(root, 0);
        return max1 - min1 + 1;
    }

}