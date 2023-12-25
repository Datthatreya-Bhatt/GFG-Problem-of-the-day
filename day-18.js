//https://www.geeksforgeeks.org/problems/determinant-of-a-matrix-1587115620/1


class Solution {
    determinantOfMatrix(matrix, n) {
        if (n === 1) {
            return matrix[0][0];
        }
        let det = 0;
        for (let i = 0; i < n; i++) {
            const cofactor = this.getCofactor(matrix, n, 0, i);

            det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * this.determinantOfMatrix(cofactor, n - 1);
        }
        return det;
    }

    getCofactor(matrix, n, row, col) {
        const cofactor = [];
        for (let i = 0; i < n; i++) {
            if (i !== row) {
                const tempRow = [];
                for (let j = 0; j < n; j++) {
                    if (j !== col) {
                        tempRow.push(matrix[i][j]);
                    }
                }
                cofactor.push(tempRow);
            }
        }
        return cofactor;
    }
}