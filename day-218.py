#       https://www.geeksforgeeks.org/problems/root-to-leaf-path-sum/1


class Solution:
    def hasPathSum(self, root, target):

        if not root:

            return False  

        if not root.left and not root.right:

            if(target-root.data==0):

                return True

        new_ld=self.hasPathSum(root.left,target-root.data)

        new_rd=self.hasPathSum(root.right,target-root.data)

        return new_ld or new_rd

        '''
        :param root: root of given tree.
        :param sm: root to leaf sum
        :return: true or false
        '''
  