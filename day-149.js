//      https://www.geeksforgeeks.org/problems/tree-from-postorder-and-inorder/1




class Solution 
{
    //Function to return a tree created from postorder and inoreder traversals.
    buildTree(In, post, n) {
      function helper(In, post, n) {
        if (In.length === 0 || post.length === 0) {
          return null;
        }
        
        const root_val = post.pop();
        const root = new Node(root_val);
        
        const root_index = In.indexOf(root_val);
        
        root.right = helper(In.slice(root_index + 1), post, n);
        root.left = helper(In.slice(0, root_index), post, n);
        
        return root;
      }
      
      return helper(In, post, n);
    }
        
}
