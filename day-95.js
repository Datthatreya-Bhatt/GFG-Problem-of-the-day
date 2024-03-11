//   https://www.geeksforgeeks.org/problems/count-pairs-sum-in-matrices4332/1



class Solution {
    /**
    * @param number n
    * @param number x
    * @param number[][] mat1
    * @param number[][] mat2
    
    * @returns number
    */
        countPairs(n, x, mat1, mat2) {
            let arr1 = new Array(n * n);
            let arr2 = new Array(n * n);
            let idx = 0;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    arr1[idx] = mat1[i][j];
                    arr2[idx] = mat2[i][j];
                    idx++;
                }
            }
            let res = 0;
            let left = 0;
            let right = (n * n) - 1;
            while (left < (n * n) && right >= 0) {
                if (arr1[left] + arr2[right] === x) {
                    res++;
                    left++;
                    right--;
                } else if (arr1[left] + arr2[right] < x) {
                    left++;
                } else if (arr1[left] + arr2[right] > x) {
                    right--;
                }
            }
            return res;
        }
    
    }
            
    