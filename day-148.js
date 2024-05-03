//      https://www.geeksforgeeks.org/problems/k-distance-from-root/1


class Solution {
    Kdistance(root, k) {
      let queue = [];
      let ans = [];
      let count = 0;
      queue.push(root);
      
      while (queue.length > 0 && count <= k + 1) {
          let level = [];
          let queueLength = queue.length;
          
          for (let i = 0; i < queueLength; i++) {
              let node = queue.shift();
              
              if (node) {
                  level.push(node.data);
                  queue.push(node.left);
                  queue.push(node.right);
              }
          }
          
          if (level.length > 0) {
              ans.push(level);
              count++;
          }
      }
      
      return ans[k] || [];
      }
  
  }