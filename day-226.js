//      https://www.geeksforgeeks.org/problems/remove-half-nodes/1




class Solution {
    RemoveHalfNodes(root) {
   if (!root) {
     return null;
   }
   
   root.left = this.RemoveHalfNodes(root.left);
   root.right = this.RemoveHalfNodes(root.right);
   
   let temp = root;
   
   if ((!root.left && root.right) || (!root.right && root.left)) {
     if (root.left) {
       temp = root.left;
     } else {
       temp = root.right;
     }
     
     root = null;
   }
   
   return temp;
 }
}