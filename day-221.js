//      https://www.geeksforgeeks.org/problems/smallest-number5829/1



class Solution {
    /**
    * @param number s
    * @param number d

    * @returns string
    */
    smallestNumber(s, d) {
        let maxv = 9 * d;
        if (s > maxv) return -1;
        let ans = "";
        s -= 1;
        for (let i = 0; i < d - 1; i++) {
            if (s >= 9) {
                ans += "9";
                s -= 9;
            } else {
                ans += s.toString();
                s = 0;
            }
        }
        ans += (s + 1).toString();
        ans = ans.split("").reverse().join("");
        return ans;
    }

}