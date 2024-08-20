#       https://www.geeksforgeeks.org/problems/burning-tree/1



class Solution:
    def minTime(self, root, target):
        # code here
        result = [0] * 1
        
        def calculateDepth(root):
            if root is None:
                return -1
            
            return max(1 + calculateDepth(root.left), 1 + calculateDepth(root.right))
        
        def searchTarget(root):
            if root is None:
                return -1
            
            if root.data == target:
                x = calculateDepth(root)
                result[0] = max(result[0], x)
                return 1
            
            left = searchTarget(root.left)
            
            if left != -1:
                x = calculateDepth(root.right)
                result[0] = max(result[0], x + left + 1)
                return left + 1
            
            right = searchTarget(root.right)
            
            if right != -1:
                x = calculateDepth(root.left)
                result[0] = max(result[0], x + right + 1)
                return right + 1
            
            return -1
        
        searchTarget(root)
        return result[0]