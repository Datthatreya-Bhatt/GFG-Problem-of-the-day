//  https://www.geeksforgeeks.org/problems/longest-repeating-and-non-overlapping-substring3421/1


class Solution {
    // Function to find the length of the longest substring without repeating characters.
    longestSubstring(s, n) {
        let res = "";
        let maxi = -1;
        let d = {};
        for (let i = 0; i < n; i++) {
            let x = "";
            for (let j = i; j < n; j++) {
                x += s[j];
                if (s.slice(j + 1).includes(x)) {
                    if (x.length > maxi) {
                        maxi = x.length;
                        res = x;
                    }
                } else {
                    break;
                }
            }
        }
        return res !== "" ? res : "-1";
    }
}




