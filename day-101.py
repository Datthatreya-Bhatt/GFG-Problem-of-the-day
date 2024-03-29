#   https://www.geeksforgeeks.org/problems/count-pairs-whose-sum-is-equal-to-x/1



class Solution:
    def countPair(self, head1, head2, n1, n2, x):
        t1,t2=head1,head2
        x1,x2=set(),set()
        while t1:
            x1.add(t1.data)
            t1 = t1.next
        while t2:
            x2.add(t2.data)
            t2 = t2.next
        res = 0
        for i in x1:
            if x-i in x2:
                res += 1
        return res