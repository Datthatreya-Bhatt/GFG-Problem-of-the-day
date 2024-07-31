//      https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1


class Solution {
    calculate_prefix(x, y) {
        let prefix = "";
        for (let i = 0; i < Math.min(x.length, y.length); i++) {
            if (x[i] === y[i]) {
                prefix += x[i];
            } else {
                break;
            }
        }
        return prefix;
    }

    longestCommonPrefix(arr) {
        if (arr.length === 0) {
            return "-1";
        }
        let ans = arr.reduce((x, y) => this.calculate_prefix(x, y));
        return ans === "" ? "-1" : ans;
    }
}
