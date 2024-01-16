# https://www.geeksforgeeks.org/problems/sequence-of-sequence1155/1



class Solution:
    def numberSequence(self, m, n):
        if m < n:
            return 0
        if n == 0:
            return 1
        return self.numberSequence(m-1, n) + self.numberSequence(m//2, n-1)
