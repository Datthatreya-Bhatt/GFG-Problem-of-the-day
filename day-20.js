//https://www.geeksforgeeks.org/problems/print-diagonally1623/1

class Solution {
    antiDiagonalPattern(matrix, n) {
			let ans = [];
			let r = matrix.length;
      let k = 0;
      
      for(let i=0; i<r; i++)
      {
				k=0;
				for(let j=i;j>=0;j--)
				{
						ans.push(matrix[k++][j]);
				}
      }
      
      for(let i=1;i<r;i++)
      {
				k=i;
				for(let j=r-1;j>=i;j--)
				{
						ans.push(matrix[k++][j]);
				}
      }
      
      return ans;
    }
}