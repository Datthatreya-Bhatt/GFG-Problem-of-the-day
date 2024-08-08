#       https://www.geeksforgeeks.org/problems/sum-tree/1



class Solution:
    def is_sum_tree(self, node):
        def helper(node):
            if not node:
                return [0, True]
            if not node.left and not node.right:
                return [node.data, True]
            left_value, left_flag = helper(node.left)
            right_value, right_flag = helper(node.right)
            if node.data != left_value + right_value or left_flag == False or right_flag == False:
                return [left_value + right_value, False]
            return [node.data, True]
        return helper(node)[1]

        # code here