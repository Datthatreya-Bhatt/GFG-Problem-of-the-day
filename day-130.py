#   https://www.geeksforgeeks.org/problems/count-the-elements1529/1


class Solution:
    def countElements(self, a, b, n, query, q):
        size = max(max(a),max(b))
        memo = [0]*(size+1)
        ans = []
        for i in range(n):
            memo[b[i]] +=1
        
        for i in range(1,size+1):
            memo[i] += memo[i-1]
        for i in range(q):
            ans.append(memo[a[query[i]]])
        return ans