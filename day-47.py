#  https://www.geeksforgeeks.org/problems/course-schedule/1

#User function Template for python3
from collections import deque
class Solution:
    def findOrder(self, n, m, prerequisites):
        # Code here
        g=[[] for _ in range (n)]
        in_degree=[0]*n
        for i in prerequisites:
            g[i[1]].append(i[0])
            in_degree[i[0]]+=1
        q=deque()
        ans=[]
        for i in range(n):
            if in_degree[i]==0:
                q.append(i)
                ans.append(i)
        while q:
            node = q.popleft()
            for child in g[node]:
                in_degree[child]-=1
                if in_degree[child]==0:
                    q.append(child)
                    ans.append(child)
        if len(ans) < n:
            ans = []
        return ans
