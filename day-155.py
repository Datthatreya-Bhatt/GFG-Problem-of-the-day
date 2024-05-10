#       https://www.geeksforgeeks.org/problems/combination-sum-ii-1664263832/1



class Solution:
    
    def CombinationSum2(self, arr, n, k):
        # code here
        
        res = []
        
        arr.sort()
        
        
        
        def helper(ind, ls, cur_sm):
            
            
            
            if cur_sm == k:
                
                res.append(ls)
                
                
                
            for i in range(ind, n):
                
                if arr[i] + cur_sm > k:
                    
                    break
                
                if i > ind and arr[i-1] ==  arr[i]:
                    
                    continue
                
                
                helper(i+1, ls + [arr[i]], cur_sm + arr[i])
            
            
            
        helper(0, [], 0)
        
        return res