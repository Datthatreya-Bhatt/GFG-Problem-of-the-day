#       https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1


from typing import List

class Solution:
    
    def findPath(self, m: List[List[int]]) -> List[str]:
        # code here
    
        result, visited, n = [], set(), len(m)
        def dfs(r, c, dirs):
            nonlocal result, visited
            if r < 0 or r >= n or c < 0 or c >= n or m[r][c] == 0 or (r, c) in visited:
                return 
            
            if (r, c) == (n-1, n-1):
                result.append("".join(dirs))
                return
            
            visited.add((r, c))
            for d in "UDLR":
                dirs.append(d)
                if d == 'U':
                    dfs(r-1, c, dirs)
                if d == 'D':
                    dfs(r+1, c, dirs)
                if d == 'L':
                    dfs(r, c-1, dirs)
                if d == 'R':
                    dfs(r, c+1, dirs)
                dirs.pop()
            visited.remove((r, c))
        dfs(0, 0, [])
        return result if result else ["-1"]

