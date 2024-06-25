#       https://www.geeksforgeeks.org/problems/coverage-of-all-zeros-in-a-binary-matrix4024/1


class Solution:
    def FindCoverage(self, matrix):
        num_rows, num_cols = len(matrix), len(matrix[0])
        count = 0
       
        for i in range(num_rows):
            for j in range(num_cols):
                if matrix[i][j] == 0:
                    if -1 < i-1 < num_rows and matrix[i-1][j] == 1:
                        count += 1
                    if -1 < j-1 < num_cols and matrix[i][j-1] == 1:
                        count += 1
                    if -1 < j+1 < num_cols and matrix[i][j+1] == 1:
                        count += 1
                    if -1 < i+1 < num_rows and matrix[i+1][j] == 1:
                        count += 1
        return count
		# Code here
