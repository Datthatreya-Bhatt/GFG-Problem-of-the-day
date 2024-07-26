//      https://www.geeksforgeeks.org/problems/k-pangrams0909/1


class Solution {
    /**
    * @param string str
    * @param number k

    * @returns boolean
    */
    kPangram(string, k) {
            let s = "";
            for (let i = 0; i < string.length; i++) {
                if (string[i].match(/[a-zA-Z]/)) {
                    s += string[i];
                }
            }
            string = s;
            if (string.length < 26) {
                return false;
            }
            let d = {};
            let u = 0;
            for (let i = 0; i < string.length; i++) {
                if (!(string[i] in d)) {
                    u += 1;
                    d[string[i]] = 1;
                }
            }
            if (26 - u > k) {
                return false;
            } else {
                return true;
            }
    }
    
}