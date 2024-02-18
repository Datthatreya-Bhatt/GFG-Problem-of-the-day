//  https://www.geeksforgeeks.org/problems/sum-of-leaf-nodes-in-bst/1




class Solution {
    //Structure of node
    /**
     * class Node {
     *     constructor() {
     *         this.data=0;
     *         this.left=null;
     *         this.right=null;
     *     }
     * }
     */

    //Function to return sum of all the leaf nodes.
    sumOfLeafNodes(root) {
        if (!root) {
            return 0;
        }
        if (!root.left && !root.right) {
            return root.data;
        }
        return this.sumOfLeafNodes(root.left) + this.sumOfLeafNodes(root.right);
    }

}