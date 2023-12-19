##js compiler not availabe for this problem so im using python for solution

#https://www.geeksforgeeks.org/problems/variation-in-nim-game4317/1


class Solution:
    def findWinner(self, n, A):
        # code here
        result = 0
        for score in A:
            result ^= score
        ans = 1 if result == 0 else (n%2)+1
        return ans





