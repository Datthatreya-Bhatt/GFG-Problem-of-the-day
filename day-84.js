//  https://www.geeksforgeeks.org/problems/sum-of-bit-differences2937/1



class Solution {
    /**
    * @param number n
    * @param number[] arr
    
    * @returns number
    */
    sumBitDifferences(arr, n) {
        // code here
        let result = 0;
        for (let i = 0; i < 32; i++) {
            let num = 1 << i;
            let count = 0;
            for (let j = 0; j < n; j++) {
                if ((arr[j] & num) > 0) {
                    count += 1;
                }
            }
            result += count * (n - count);
        }
        return result * 2;
    }
}