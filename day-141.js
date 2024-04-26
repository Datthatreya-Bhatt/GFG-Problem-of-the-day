//  https://www.geeksforgeeks.org/problems/exit-point-in-a-matrix0905/1




class Solution {
    FindExitPoint(n, m, matrix) {
      let dire = 0;
      let i = 0, j = 0;
      // 0 -> left to right
      // 1 -> top to bottom
      // 2 -> right to left
      // 3 -> bottom to top
    
      while (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
        if (matrix[i][j] === 1) {
          dire = (dire + 1) % 4;
          matrix[i][j] = 0;
        }
        if (dire === 0) j++;
        else if (dire === 1) i++;
        else if (dire === 2) j--;
        else if (dire === 3) i--;
      }
    
      if (i < 0) i++;
      if (j < 0) j++;
      if (i === matrix.length) i--;
      if (j === matrix[0].length) j--;
    
      return [i, j];
    }

};