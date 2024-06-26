//      https://www.geeksforgeeks.org/problems/toeplitz-matrix/1



class Solution {
    isToepliz(mat) {
        let r = mat.length;
        let c = mat[0].length;
        for (let j = 0; j < c; j++) {
            let constant = mat[0][j];
            for (let i = 1; i < r; i++) {
                if (i < r && i + j < c && mat[i][i + j] !== constant) {
                    return false;
                }
            }
        }
        return true;
    }

}
