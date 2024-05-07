//      https://www.geeksforgeeks.org/problems/reverse-level-order-traversal/1




class Solution {
    reverseLevelOrder(root) {
      let ans = [];
      let q = [root];
      while (q.length > 0) {
          let c = q.shift();
          ans.unshift(c.data);
          if (c.right) {
              q.push(c.right);
          }
          if (c.left) {
              q.push(c.left);
          }
      }
      return ans;
  }

}