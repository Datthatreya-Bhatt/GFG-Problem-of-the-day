#       https://www.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers5537/1




class Solution:
	def PowMod(self, x, n, m):
        # if n == 0:
        #     return 1
        result = 1
        x = x % m  # In case x is greater than m
        while n > 0:
            # If n is odd, multiply x with result
            if n % 2 == 1:
                result = (result * x) % m
            # n must be even now
            n = n >> 1  # n = n // 2
            x = (x * x) % m  # Change x to x^2
        return result
		# Code here

