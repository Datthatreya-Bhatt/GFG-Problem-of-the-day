#       https://www.geeksforgeeks.org/problems/largest-bst/1



class Solution:
    def largestBst(self, root):
    # Your code here
    
        def traverse(node):
            if not node:
                return True, 0, float('inf'), float('-inf')
            left_valid, left_size, left_min, left_max = traverse(node.left)
            right_valid, right_size, right_min, right_max = traverse(node.right)
            
            if left_valid and right_valid and left_max < node.data < right_min:
                return True, 1 + left_size + right_size, min(node.data, left_min), max(node.data, right_max)
            
            return False, max(left_size, right_size), 0, 0
        
        _, result, _, _ = traverse(root)
        return result
