// https://www.geeksforgeeks.org/problems/recamans-sequence4856/1


class Solution {
    recamanSequence(n) {
        if (n < 2) {
            return Array.from({length: n}, (_, i) => i);
        }
       
        let visited = new Set([0, 1]);
        let sequence = [0, 1];
        let current = 1;

        for (let i = 2; i < n; i++) {
            current = current - i >= 0 && !visited.has(current - i) ? current - i : current + i;
            visited.add(current);
            sequence.push(current);
        }

        return sequence;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.recamanSequence(10));  // Replace 10 with the desired value of n
