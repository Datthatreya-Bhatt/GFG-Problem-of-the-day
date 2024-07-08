#       https://www.geeksforgeeks.org/problems/three-sum-closest/1


class Solution:
   def threeSumClosest (self, arr, target):
    # Your Code Here
       
        diff, ans, n = float('inf'), 0, len(arr)
        
        arr.sort()
        for i in range(n):
            lo, hi = i+1, n-1
            while lo < hi:
                s = arr[i] + arr[lo] + arr[hi]
                if s == target:
                    return s
                    
                if abs(s-target) < diff:
                    diff = abs(s-target)
                    ans = s 
                elif abs(s-target) == diff:
                    ans = max(ans, s)
                
                if s > target:
                    hi -= 1
                else:
                    lo += 1
        return ans