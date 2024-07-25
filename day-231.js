//      https://www.geeksforgeeks.org/problems/array-to-bst4443/1




class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  
  class Solution {
    sortedArrayToBST(nums) {
      // Check if the array is empty, if yes, return null as the tree object
      if (nums.length === 0) {
        return null;
      }
  
      const treeBuilder = (arr) => {
        // If the left or right subpart of the tree has no elements, return null as the child
        if (arr.length === 0) {
          return null;
        }
  
        // Calculating n, the median element of the subpart
        const n = Math.floor(arr.length / 2);
  
        // Initializing the new node.
        const newNode = new TreeNode(arr[n]);
  
        // Recursively constructing the tree by splitting the array into a left and right subpart
        newNode.left = treeBuilder(arr.slice(0, n)); // Subpart before the median element
        newNode.right = treeBuilder(arr.slice(n + 1)); // Subpart after the median element
  
        return newNode;
      };
  
      // Executing the recursive solution
      const root = treeBuilder(nums);
      return root;
    }
  }
  