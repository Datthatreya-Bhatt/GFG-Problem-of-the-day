// https://www.geeksforgeeks.org/problems/search-pattern0205/1




class Solution {
    search(pat, txt) {
        const result = [];
        const lps = this.calculateLPS(pat);

        let i = 0; // index for txt
        let j = 0; // index for pat

        while (i < txt.length) {
            if (pat[j] === txt[i]) {
                i++;
                j++;
            }

            if (j === pat.length) {
                result.push(i - j + 1);
                j = lps[j - 1];
            } else if (i < txt.length && pat[j] !== txt[i]) {
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }

        return result.length === 0 ? [-1] : result;
    }

    calculateLPS(pat) {
        const lps = new Array(pat.length).fill(0);
        let len = 0;
        let i = 1;

        while (i < pat.length) {
            if (pat[i] === pat[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        return lps;
    }
}