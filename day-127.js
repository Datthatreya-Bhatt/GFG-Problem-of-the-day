//  https://www.geeksforgeeks.org/problems/sum-of-products5049/1




class Solution {
    // Function to pair and sum the elements of the array.
    pairAndSum(n, arr) {
        let bit_counts = new Array(32).fill(0);
        let bit_and_sum = 0;
    
        for (let a of arr) {
            for (let i = 0; i < 32; i++) {
                let mask = 1 << i;
                if (a & mask) {
                    bit_and_sum += bit_counts[i] * mask;
                    bit_counts[i] += 1;
                } else if (mask > a) {
                    break;
                }
            }
        }
    
        return bit_and_sum;
    }


}