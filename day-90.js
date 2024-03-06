//  https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm--141631/1




class Solution {
    search(pattern, text) {
        let n = text.length;
        let m = pattern.length;
        if (n < m) {
            return -1;
        } else {
            let a = [];
            for (let i = 0; i < n; i++) {
                if (text.substring(i, i + m) === pattern) {
                    a.push(1 + i);
                }
            }
            return a;
        }
    }
}
