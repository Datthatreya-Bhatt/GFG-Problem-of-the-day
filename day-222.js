//      https://www.geeksforgeeks.org/problems/remaining-string3515/1


class Solution {
    printString(s, ch, count) {
        let index = 0;
        for (let i = 0; i < s.length; i++) {
            if (count === 1 && s.charAt(i) === ch) {
                index = i + 1;
                break;
            }
            if (s.charAt(i) === ch) {
                count--;
            }
        }
        if (index === 0) {
            return "";
        }
        let ans = "";
        while (index < s.length) {
            ans += s.charAt(index++);
        }
        return ans;
    }

}