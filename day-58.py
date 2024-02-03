# https://www.geeksforgeeks.org/problems/decimal-equivalent-of-binary-linked-list/1



class Solution:
    def decimalValue(self, head):
        MOD=10**9+7
        # Code here
        i = 0
        temp = head
        while(temp):
            i+=1
            temp = temp.next

        temp = head
        i-=1
        out = 0
        while(temp):
            out = out + (temp.data)* 2 ** (i)
            i-=1
            temp = temp.next
        
        return out%MOD