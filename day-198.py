#       https://www.geeksforgeeks.org/problems/extract-the-number-from-the-string3428/1


class Solution:
    def ExtractNumber(self,sentence):
        x = sentence.split(" ")
        max_number = -1
        for num_str in x:
            if num_str.isnumeric() and "9" not in num_str and int(num_str) > max_number:
                max_number = int(num_str)
        return max_number
        #code here

