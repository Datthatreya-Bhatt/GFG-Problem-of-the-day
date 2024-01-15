#  https://www.geeksforgeeks.org/problems/grinding-geek/1





from typing import List


class Solution:
        def max_courses(self, n : int, total : int, cost : List[int]) -> int:
            # code here
            def solve(n,t):
                if dp[n][t]!=-1:
                    return dp[n][t]
                elif n==1:                   # this is the last course. End of recursion.
                    if t>=cost[n-1]:
                        dp[n][t]=1
                    else:
                        dp[n][t]=0
                    return dp[n][t]
                else:                           # Continue recursion with skip/take course
                    ans=solve(n-1,t)
                    if t>=cost[n-1]:
                        ans=max(ans,1+solve(n-1,t-cost[n-1]+int(cost[n-1]*0.9)))
                    dp[n][t]=ans
                    return ans
            
            dp=[[-1]*(total+1) for _ in range(n+1)]
            cost=cost[::-1]              # Reverse cost because recursion goes from n-1 to 0
            return solve(n,total)
        
        

