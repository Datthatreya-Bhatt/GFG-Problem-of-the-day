# https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1

class Solution:
    def modifyQueue(self, q, k):
        # code here
        return q[:k][::-1]+q[k:]







