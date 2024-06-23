#    https://www.geeksforgeeks.org/problems/summed-matrix5834/1   


class Solution:
    def sumMatrix(self, n, q):
        # code here 
        if n>q:
            return q-1
        if n*2<q or n==q:
            return 0
        else:
            return n-(q-n-1)