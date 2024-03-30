//  https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1




class Solution {
    // Function to find the minimum element in the given BST.
    minValue(root) {
        // your code here
        if (root.left === null) return root.data;
        return this.minValue(root.left);
    }

}