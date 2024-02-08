// https://www.geeksforgeeks.org/problems/leaf-at-same-level/1



class Solution {
    check(root) {
        // Initialize leafLevel as 0
        let leafLevel = { level: 0 };
        
        // Define checkUtil function
        function checkUtil(node, level, leafLevel) {
            if (node === null) {
                return true;
            }
            
            // If current node is a leaf
            if (node.left === null && node.right === null) {
                // If this the first leaf encountered
                if (leafLevel.level === 0) {
                    leafLevel.level = level;
                    return true;
                }
                // If the level of this leaf is the same as leafLevel
                return level === leafLevel.level;
            }
            
            // Recur for the left and right subtrees
            return checkUtil(node.left, level + 1, leafLevel) && checkUtil(node.right, level + 1, leafLevel);
        }
        
        // Call the checkUtil function with the root node
        return checkUtil(root, 1, leafLevel);
    }
}
