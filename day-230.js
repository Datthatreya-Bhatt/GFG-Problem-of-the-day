//          https://www.geeksforgeeks.org/problems/check-for-bst/1




class Solution {
    // Function to check whether a Binary Tree is BST or not.
    isBST(root) {
        function isBSTUtil(root, min1, max1) {
            if (root === null) {
                return true;
            }

            if (root.data <= min1 || root.data >= max1) {
                return false;
            }

            return isBSTUtil(root.left, min1, root.data) && isBSTUtil(root.right, root.data, max1);
        }

        return isBSTUtil(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
}