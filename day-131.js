//  https://www.geeksforgeeks.org/problems/minimize-the-difference/1





class Solution {
    /**
    * @param number n
    * @param number k
    * @param number[] arr
    
    * @returns number
    */
        minimizeDifference(n, k, arr) {
            if (k === n-1) {
                return 0;
            }
            let rit_min = new Array(n).fill(0);
            let rit_max = new Array(n).fill(0);
            let left_min = new Array(n).fill(0);
            let left_max = new Array(n).fill(0);
            left_min[0] = left_max[0] = arr[0];
            for (let i = 1; i < n; i++) {
                left_min[i] = Math.min(left_min[i-1], arr[i]);
                left_max[i] = Math.max(left_max[i-1], arr[i]);
            }
            rit_min[n-1] = rit_max[n-1] = arr[n-1];
            for (let i = n-2; i >= 0; i--) {
                rit_min[i] = Math.min(rit_min[i+1], arr[i]);
                rit_max[i] = Math.max(rit_max[i+1], arr[i]);
            }
            let ans = rit_max[k] - rit_min[k];
            let i = 0;
            for (let j = k+1; j < n; j++) {
                ans = Math.min(ans, Math.max(left_max[i], rit_max[j]) - Math.min(left_min[i], rit_min[j]));
                i += 1;
            }
            ans = Math.min(ans, left_max[i] - left_min[i]);
            return ans;
        }
    
    }