//      https://www.geeksforgeeks.org/problems/maximum-product-subset-of-an-array/1



class Solution {
    /**
    * @param number[] a

    * @returns number
    */
    findMaxProduct(arr) {
        let mod = Math.pow(10, 9) + 7;
        let neg = 0;
        let ans = 1;
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                neg += 1;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                ans = (ans * arr[i]) % mod;
            }
        }
        if (neg % 2 === 1) {
            neg -= 1;
        }
        for (let i = 0; i < neg; i++) {
            ans = (ans * arr[i]) % mod;
        }
        return ans;
    }

}