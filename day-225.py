#       https://www.geeksforgeeks.org/problems/count-smaller-elements2214/1


import bisect

class Solution:
    def constructLowerArray(self, arr):
        result = [0]
        right = [arr[-1]]
        for i in range(len(arr)-2, -1, -1):
            # count of element smaller than arr[i] in right
            count = bisect.bisect_left(right, arr[i])
            bisect.insort(right, arr[i])
            result.append(count)
        return result[::-1]

		# code here
