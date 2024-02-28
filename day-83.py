#  https://www.geeksforgeeks.org/problems/check-if-a-number-is-divisible-by-83957/1



class Solution:
    def DivisibleByEight(self,s):
        #code here
        return 1 if int(s[-3:]) % 8 == 0 else -1


