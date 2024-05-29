//      https://www.geeksforgeeks.org/problems/find-number-of-times-a-string-occurs-as-a-subsequence3020/1



class Solution {
    /**
    * @param string s1
    * @param string s2

    * @returns number
    */
    countWays(s1, s2) {
        const memo = {};
    
        function match(i, j) {
            if (i < 0) {
                return 1;
            }
            if (j < 0) {
                return 0;
            }
            if (memo.hasOwnProperty(`${i}-${j}`)) {
                return memo[`${i}-${j}`];
            }
    
            let r = match(i, j - 1);
    
            if (s2.charAt(i) === s1.charAt(j)) {
                r += match(i - 1, j - 1);
            }
    
            memo[`${i}-${j}`] = r % (10 ** 9 + 7);
            return memo[`${i}-${j}`];
        }
    
        return match(s2.length - 1, s1.length - 1);
    }

}