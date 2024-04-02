#   https://www.geeksforgeeks.org/problems/minimum-absolute-difference-in-bst-1665139652/1


        
class Solution:
    def absolute_diff(self,root):
      
        arr=[]
        def inorder(node):
            if node.left:inorder(node.left)
            arr.append(node.data)
            if node.right:inorder(node.right)
        inorder(root)
        i=0
        j=i+1
        out=float('inf')
        while j<len(arr):
            if arr[j]-arr[i]<out:
                out=arr[j]-arr[i]
            j+=1
            i+=1
        return out
       # Your code here

