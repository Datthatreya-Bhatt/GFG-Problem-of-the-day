//https://www.geeksforgeeks.org/problems/rightmost-different-bit-1587115621/1


class Solution {
    posOfRightMostDiffBit(m, n) {
        let xorResult = m ^ n;

        if (xorResult === 0) {
            return -1;
        }
        let position = 1;
        while ((xorResult & 1) === 0) {
            xorResult >>= 1;
            position++;
        }

        return position;
    }
}