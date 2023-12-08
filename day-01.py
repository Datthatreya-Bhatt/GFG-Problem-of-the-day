#js compiler not availabe for this problem so im using python for solution
#link of the problem is below
#https://www.geeksforgeeks.org/problems/transform-to-prime4635/1


class Solution:
    def is_prime(self, num):
        if num < 2:
            return False
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                return False
        return True

    def minNumber(self, arr, n):
        # Finding the sum of the array.
        array_sum = sum(arr)

        # Checking if the sum is prime.
        if self.is_prime(array_sum):
            return 0

        # Finding the smallest prime number greater than the sum.
        while not self.is_prime(array_sum):
            array_sum += 1

        return array_sum - sum(arr)
