//     https://www.geeksforgeeks.org/problems/count-numbers-containing-43022/1 


class Solution {
    /**
    * @param number n

    * @returns number
    */
    countNumberswith4(n) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (i.toString().includes('4')) {
                count++;
            }
        }
        return count;
    }
}