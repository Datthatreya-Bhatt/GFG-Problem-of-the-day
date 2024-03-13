#   https://www.geeksforgeeks.org/problems/print-matrix-in-diagonal-pattern/1


# Your task is to complete this function
class Solution:
    def matrixDiagonally(self,mat):
            # code here
            n = len(mat)
            ans = []
            flag = 0
            
            for g in range(n):
                temp = []
                
                for i, j in zip(range(g,-1,-1), range(0,g+1)):
                    temp.append(mat[i][j])
                    
                if flag%2:
                    ans.extend(temp[::-1])
                    
                else:
                    ans.extend(temp)
                flag+=1
                
            for g in range(n-1, 0, -1):
                temp = []
                
                for i,j in zip(range(n-1, 0, -1), range(n-g,n)):
                    temp.append(mat[i][j])
                    
                if flag%2:
                    ans.extend(temp[::-1])
                    
                else:
                    ans.extend(temp)
                flag+=1
            
            return ans
