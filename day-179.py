#       https://www.geeksforgeeks.org/problems/trail-of-ones3242/1


#User function Template for python3
class Solution:
    def numberOfConsecutiveOnes(ob, n):
    # code here
        new_zero_invalid, new_one_invalid = 1, 1
        new_M = 10**9+7
        for _ in range(1, n):
            new_zero_invalid, new_one_invalid = (new_zero_invalid+new_one_invalid) % new_M, new_zero_invalid
        return (pow(2, n) % new_M + new_M - (new_zero_invalid+new_one_invalid)) % new_M
 
        
