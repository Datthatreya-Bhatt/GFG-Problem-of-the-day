//      https://www.geeksforgeeks.org/problems/longest-common-substring1452/1

class Solution {
    isPossible(s1, s2, window) {
        const sset = new Set();
        for (let i = 0; i <= s1.length - window; i++) {
            sset.add(s1.substring(i, i + window));
        }

        for (let i = 0; i <= s2.length - window; i++) {
            const sub = s2.substring(i, i + window);
            if (sset.has(sub)) {
                return true;
            }
        }

        return false;
    }

    longestCommonSubstr(str1, str2) {
        let low = 0, high = str1.length;
        let ans = 0;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this.isPossible(str1, str2, mid)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }
}
