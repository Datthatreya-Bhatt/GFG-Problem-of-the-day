#       https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1



class Solution:
    def bottomView(self, root):
        # code here
        view = {}
        def walk(n, level=0, pos=0):
            if not n:
                return
            walk(n.left, level+1, pos-1)
            if pos not in view or view[pos][1] <= level:
                view[pos] = (n.data, level)
            walk(n.right, level+1, pos+1)
    
        walk(root)
        return [view[k][0] for k in sorted(view)]
    