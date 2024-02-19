// https://www.geeksforgeeks.org/problems/game-with-string4100/1



class Solution {
    static minValue(s, k) {
        // Base case
        if (s.length === 0) return 0;
        if (s.length === 1 && k === 1) return 0;

        let freq = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            freq[s.charCodeAt(i) - 97]++;
        }

        for (let i = 0; i < k; i++) {
            freq.sort((a, b) => b - a);
            freq[0] -= 1;
        }

        let sum = 0;
        for (let i = 0; i < 26; i++) {
            sum += freq[i] * freq[i];
        }

        return sum;
    }
}
