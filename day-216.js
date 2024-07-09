//      https://www.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1



class Solution {
    /**
    * @param number n
    * @param number m
    * @param number[][] mat

    * @returns number
    */
    maxSquare(n, m, mat) {
        let res = Math.max(Math.max(...mat[0]), Math.max(...mat.map(row => row[0])));

        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                if (mat[i][j]) {
                    mat[i][j] = 1 + Math.min(mat[i - 1][j - 1], mat[i - 1][j], mat[i][j - 1]);
                    res = Math.max(res, mat[i][j]);
                }
            }
        }

        return res;
    }
}