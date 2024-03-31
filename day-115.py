#    https://www.geeksforgeeks.org/problems/closest-neighbor-in-bst/1




class Solution:
    def findMaxForN(self, root, n):
        #Print the value of the element if it exists otherwise print -1.
      
        out=-1
        while(root):
            if(root.key>n):
                root=root.left
            else:
                if(root.key<=n):
                    out=root.key
                    root=root.right
        return out
        #code here
