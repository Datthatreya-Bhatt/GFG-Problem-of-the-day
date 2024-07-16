//      https://www.geeksforgeeks.org/problems/construct-binary-tree-from-parent-array/1


  
  class Solution {
    // Function to construct binary tree from parent array.
    createTree(parent) {
      let space = {};
      let n = parent.length;
      let root = null;
      for (let i = 0; i < n; i++) {
        let t = new Node(i);
        space[i] = t;
        if (parent[i] === -1) {
          root = t;
        }
      }
      for (let i = 0; i < n; i++) {
        let value = parent[i];
        if (value !== -1) {
          let node = space[value];
          if (space[value].left === null) {
            space[value].left = space[i];
          } else {
            space[value].right = space[i];
          }
        }
      }
      return root;
    }
  }
  