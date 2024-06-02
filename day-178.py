#       https://geeksforgeeks.org/problems/construct-list-using-given-q-xor-queries/1


from typing import List

class Solution:
    def constructList(self, q : int, queries : List[List[int]]) -> List[int]:
        result = []
        xor_sum = 0
        for query in reversed(queries):
            if query[0] == 0:
                query[1] ^= xor_sum
                result.append(query[1])
            else:
                xor_sum ^= query[1]
        result.append(xor_sum)  # for 0 element
        return sorted(result)

        # code here
        
