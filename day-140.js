//  https://www.geeksforgeeks.org/problems/maximum-sum-of-hour-glass3842/1




class Solution {
    findMaxSum(n, m, mat) {
        if (n < 3 || m < 3) {
            return -1;
        }

        let max_sm = 0;

        for (let y = 1; y < n - 1; y++) {
            for (let x = 1; x < m - 1; x++) {
                let temp_sm = 0;

                const directions = [[0, 0], [-1, 0], [-1, -1], [-1, 1], [1, 0], [1, -1], [1, 1]];

                for (let i = 0; i < directions.length; i++) {
                    const [dy, dx] = directions[i];
                    temp_sm += mat[y + dy][x + dx];
                }

                max_sm = Math.max(max_sm, temp_sm);
            }
        }

        return max_sm;
    }
}
