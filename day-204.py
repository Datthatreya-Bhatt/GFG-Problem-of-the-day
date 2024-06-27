#       https://www.geeksforgeeks.org/problems/the-palindrome-pattern3900/1



class Solution:
    def pattern (self, arr):
        # code here
        def isp(a):
            return a == a[::-1]

        # Check for row palindromes
        for i in range(len(arr)):
            if isp(arr[i]):
                return str(i) + " R"

        # Check for column palindromes
        for i in range(len(arr[0])):
            column = [arr[j][i] for j in range(len(arr))]
            if isp(column):
                return str(i) + " C"

        return -1

