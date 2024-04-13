//  https://www.geeksforgeeks.org/problems/reverse-bits3556/1




class Solution {
    reversedBits(x) {
        let y = x.toString(2).padStart(32, '0').split('').reverse().join('');
        return parseInt(y, 2);
    }
}

const solution = new Solution();
console.log(solution.reversedBits(1)); // Output: 2147483648
