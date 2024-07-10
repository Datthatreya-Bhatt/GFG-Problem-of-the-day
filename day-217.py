#       https://www.geeksforgeeks.org/problems/maximum-connected-group/1



def MaxConnection(self, grid : List[List[int]]) -> int:
        
        visited = set()
        m, n, d = len(grid), len(grid[0]), {}
        
        def dfs(r, c, s):
            nonlocal m, n
            if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == 0:
                return
            if (r, c) in visited:
                return 
            
            visited.add((r, c))
            s.add((r, c))
            d[r, c] = s
            dfs(r+1, c, s)
            dfs(r-1, c, s)
            dfs(r, c-1, s)
            dfs(r, c+1, s)
        
        zeros = []
        for r in range(m):
            for c in range(n):
                if grid[r][c] == 0:
                    zeros.append((r, c))
                elif (r, c) not in visited:
                    dfs(r, c, set())

        if not zeros:
            return m*n
            
        ans = 1
        for r, c in zeros:
            ss = []
            cnt = 1
            for r0, c0 in [(r-1, c), (r+1, c), (r, c-1), (r, c+1)]:
                if (r0, c0) not in d:
                    continue
                s0 = d[r0, c0]
               
                for s in ss:
                    if s0 is s:
                        break
                else:
                    ss.append(s0)
                    cnt += len(s0)
                
            ans = max(ans, cnt)
        return ans
