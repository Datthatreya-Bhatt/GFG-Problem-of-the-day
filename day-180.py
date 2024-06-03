#       https://www.geeksforgeeks.org/problems/binary-representation-of-next-number3648/1


class Solution:
    def binaryNextNumber(self, s):
        decimal_num = int(s, 2)
        decimal_num += 1
        binary_num = bin(decimal_num)
        return binary_num[2:]
		# code here
