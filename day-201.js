//      https://www.geeksforgeeks.org/problems/left-rotate-matrix-k-times2351/1



class Solution {
    /**
    * @param number n
    * @param number m
    * @param number k
    * @param number[][] mat

    * @returns number[][]
    */
    rotateMatrix(k, mat) {
        if (!mat) {
          return mat;
        }
        
        let n = mat.length;
        let m = mat[0].length;
        k = k % m; // Reduce k to avoid unnecessary full row rotations
        
        let rotated_mat = [];
        
        for (let row of mat) {
          // Rotate row by k positions to the left
          let rotated_row = row.slice(k).concat(row.slice(0, k));
          rotated_mat.push(rotated_row);
        }
        
        return rotated_mat;
     }
}