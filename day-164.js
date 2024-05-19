//      https://www.geeksforgeeks.org/problems/find-the-closest-number5513/1





class Solution {
    /**
    * @param number n
    * @param number k
    * @param number[] arr
    
    * @returns number
    */
        findClosest(n, k, arr) {
          let minm = Infinity;
          let nums = 0;
        
          for (let i of new Set(arr)) {
            if (Math.abs(i - k) <= minm) {
              minm = Math.abs(i - k);
              nums = i;
            }
          }
        
          return nums;
        }
    
    }