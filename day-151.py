#       https://geeksforgeeks.org/problems/print-all-nodes-that-dont-have-sibling/1


def noSibling(root):
    # code here
    res = []
    def inorder(root):
        if root == None:
            return
        inorder(root.left)
        if root.left == None and root.right != None:
            res.append(root.right.data)
        elif root.left != None and root.right == None:
            res.append(root.left.data)
        inorder(root.right)
    inorder(root)
    
    return sorted(res) if len(res) else [-1]