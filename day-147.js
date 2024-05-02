//      https://www.geeksforgeeks.org/problems/serialize-and-deserialize-a-binary-tree/1



class Solution 
{
    /**
     * @param {Node} root
     * @returns {number[]}
    */
    
    //Function to serialize a tree and return a list containing nodes of tree.
  serialize(root) {
    const arr = [];
    function fun(root) {
      if (root === null) {
        return;
      }
      fun(root.left);
      arr.push(root.data);
      fun(root.right);
    }
    fun(root);
    return arr;
  }
    
    /**
     * @param {number[]} A
     * @returns {Node}
    */
    
    //Function to deserialize a list and construct the tree
  deSerialize(a) {
    function fun(a, l, r) {
      if (l > r) {
        return null;
      }
      const idx = Math.floor((l + r) / 2);
      const root = new Node(a[idx]);
      root.left = fun(a, l, idx - 1);
      root.right = fun(a, idx + 1, r);
      return root;
    }
    return fun(a, 0, a.length - 1);
  }
}