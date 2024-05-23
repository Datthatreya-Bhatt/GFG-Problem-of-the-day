//      https://www.geeksforgeeks.org/problems/find-if-string-is-k-palindrome-or-not1923/1






class Solution {
    kPalindrome(s, n, k) {
        let curr;
        let prev = new Array(s.length).fill(0);
        for (let i = s.length - 1; i >= 0; i--) {
            curr = new Array(s.length).fill(0);
            curr[i] = 1;
            for (let j = i + 1; j < s.length; j++) {
                curr[j] = Math.max(prev[j], curr[j - 1]);
                if (s[i] === s[j]) {
                    curr[j] = Math.max(curr[j], 2 + prev[j - 1]);
                }
            }
            prev = [...curr];
        }
        return (s.length - curr[s.length - 1] <= k) ? 1 : 0;
    }
}




