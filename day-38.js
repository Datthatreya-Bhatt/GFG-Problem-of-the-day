// https://www.geeksforgeeks.org/problems/find-duplicate-rows-in-a-binary-matrix/1



class Solution {
    repeatedRows(matrix, R, C) {
       // Your code here
      let st = new Set();
      let ans = [];
      
      for (let i = 0; i < matrix.length; i++) {
        let temp = "";
        
        for (let j = 0; j < matrix[0].length; j++) {
          temp += matrix[i][j];
        }
        
        if (st.has(temp)) {
          ans.push(i);
        }
        
        st.add(temp);
      }
      
      return ans;
    }
}