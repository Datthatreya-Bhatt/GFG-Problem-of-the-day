//  https://www.geeksforgeeks.org/problems/print-n-bit-binary-numbers-having-more-1s-than-0s0252/1






class Solution {
    NBitBinary(n) {
        let ans = [];
        function solve(temp, ln, zeros, ones) {
            if (ln === n) {
                if (ones >= zeros) {
                    ans.push(temp);
                }
                return;
            }
            if (ones >= zeros) {
                solve(temp + "1", ln + 1, zeros, ones + 1);
                solve(temp + "0", ln + 1, zeros + 1, ones);
            }
        }
        solve("1", 1, 0, 1);
        ans.sort((a, b) => b.localeCompare(a));
        return ans;
    }
}
