//  https://www.geeksforgeeks.org/problems/level-order-traversal/1






class Solution {
    //Function to return the level order traversal of a tree.
    levelOrder(root)
    {
        //your code here
        
      if (!root) {
        return [];
      }
    
      let queue = [root];
      let result = [];
    
      while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.data);
    
        if (node.left) {
          queue.push(node.left);
        }
    
        if (node.right) {
          queue.push(node.right);
        }
      }
    
      return result;

    }
}
