#       https://www.geeksforgeeks.org/problems/padovan-sequence2855/1



class Solution:
    def padovanSequence(self, n):
        if n < 3:
            return 1
        previous_1 = previous_2 = previous_3 = 1
        for i in range(n - 2):
            previous_1, previous_2, previous_3 = previous_2, previous_3, (previous_1 + previous_2) % (10**9 + 7)
        return previous_3

        # code here 
