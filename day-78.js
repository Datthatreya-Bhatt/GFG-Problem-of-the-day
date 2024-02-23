// https://www.geeksforgeeks.org/problems/buy-and-sell-a-share-at-most-twice/1



class Solution {
    /**
    * @param number n
    * @param number[] price
    
    * @returns number
    */
        maxProfit(price) {
            let n = price.length;
           
            let left = new Array(n).fill(0);
            let mn = price[0];
            for (let i = 1; i < n; i++) {
                let cur = price[i];
                mn = Math.min(mn, cur);
                left[i] = Math.max(left[i - 1], cur - mn);
            }
        
            let mx = price[n - 1];
            let result = Math.max(...left);
            for (let i = n - 2; i > 0; i--) {
                let cur = price[i];
                mx = Math.max(mx, cur);
                result = Math.max(result, left[i - 1] + mx - cur);
            }
            return result;
        }
    }
            