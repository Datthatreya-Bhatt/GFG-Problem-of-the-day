//   https://www.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1



class Solution {
    sumOfLongRootToLeafPath(root) {
      let pathSum = 0;
      let ans = 0;
      let count = 0;
      let maxCount = 0;
      function findMax(root){
          if (root == null) {
              return 0;
          }
          count += 1;
          let sum = 0;
          pathSum += root.data;
          if(count >= maxCount){
              if(count > maxCount){
                  ans = pathSum;
              }else{
                  ans = Math.max(pathSum, ans);
              }
              maxCount = count;
          }
          sum = pathSum + Math.max(findMax(root.left), findMax(root.right));
          pathSum -= root.data;
          count -= 1;
          return sum;
      }
      findMax(root)
      return ans;
    }
  }
  