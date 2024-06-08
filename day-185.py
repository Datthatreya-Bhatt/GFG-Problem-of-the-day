#    https://www.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1   



from typing import List

class Solution:
    def zigZag(self, n: int, arr: List[int]) -> None:
        is_less_than_expected = True
        for i in range(n-1):
            if (is_less_than_expected and arr[i] > arr[i+1]) or (not is_less_than_expected and arr[i] < arr[i+1]):
                arr[i], arr[i+1] = arr[i+1], arr[i]
            is_less_than_expected = not is_less_than_expected

        # code here
    