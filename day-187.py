#       https://www.geeksforgeeks.org/problems/maximum-tip-calculator2631/1



from typing import List


class Solution:
    def maxTip(self, n: int, a: int, b: int, arr: List[int], brr: List[int]) -> int:
        # code here
        tips = [[0, 0] for _ in range(n)]
        for i in range(n):
            tips[i][0] = arr[i]
            tips[i][1] = brr[i]
        tips.sort(key=lambda x: abs(x[0] - x[1]), reverse=True)

        total_tips = 0
        for tip in tips:
            if (tip[0] > tip[1] and a > 0) or (b == 0):
                total_tips += tip[0]
                a -= 1
            else:
                total_tips += tip[1]
                b -= 1
                
        return total_tips

       