# https://www.geeksforgeeks.org/problems/does-array-represent-heap4345/1



class Solution:
    def isMaxHeap(self,arr,n):
        # Your code goes here            
        for i in range(n):
            lt = 2*i + 1
            rt = 2*i + 2
            if lt < n and arr[i] < arr[lt]:
                return False
            if rt < n and arr[i] < arr[rt]:
                return False
        return True




