#       https://www.geeksforgeeks.org/problems/duplicate-subtrees/1


from collections import Counter

class Solution:
    def printAllDups(self, root):
    
        counter = Counter()
        duplicates = []
        
        def walk(n):
            if not n:
                return None
            l = walk(n.left)
            r = walk(n.right)
            tree = (n.data, l, r)
            counter[tree] += 1
            if counter[tree] == 2:
                duplicates.append(n)
            return tree
            
        walk(root)
        return sorted(duplicates, key=lambda x: x.data)

        # code here
