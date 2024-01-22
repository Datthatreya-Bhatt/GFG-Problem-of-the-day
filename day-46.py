# https://www.geeksforgeeks.org/problems/paths-from-root-with-a-specified-sum/1

class Solution:
    def printPaths(self, root, sum1):
        #code here
        res = []
        
        curr_path = []
        curr_sum = 0
        
        def dfs(node):
            nonlocal curr_sum
            if not node:
                return 0
            
            curr_sum += node.data
            curr_path.append(node.data)
            
            if curr_sum == sum1:
                res.append(curr_path.copy())
            
            dfs(node.left)
            dfs(node.right)
            
            curr_sum -= node.data
            curr_path.pop()
        
        dfs(root)
        return res