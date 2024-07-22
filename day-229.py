#       https://www.geeksforgeeks.org/problems/merge-two-bst-s/1



class Solution:
    def merge(self, root1, root2):

        def convert(n):
            if not n or (not n.left and not n.right):
                return n
    
            if n.left:
                left = convert(n.left)
                left.is_threaded = True
                left.right = n
    
            if not n.right:
                return n
            return convert(n.right)
    
        def left_most(n):
            while n and n.left:
                n = n.left
            return n
    
        def next_node(n):
            if getattr(n, 'is_threaded', False):
                n = n.right
            else:
                n = left_most(n.right)
            return n
    
        convert(root1) 
        convert(root2)
        c1, c2 = left_most(root1), left_most(root2)
        ans = []
        while c1 and c2:
            if c1.data < c2.data:
                ans.append(c1.data)
                c1 = next_node(c1)
            else:
                ans.append(c2.data)
                c2 = next_node(c2)
        while c1:
            ans.append(c1.data)
            c1 = next_node(c1)
        while c2:
            ans.append(c2.data)
            c2 = next_node(c2)
    
        return sorted(ans)

        # code here
