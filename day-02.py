#js compiler not availabe for this problem so im using python for solution
#link of the problem is below
#https://www.geeksforgeeks.org/problems/smith-number4132/1

class Solution:
    def count(self, temp):
        sum1 = 0 
        while temp:
            s = temp%10
            sum1 += s
            temp = temp // 10
        return sum1
    def primefactor(self,n):
        sum1 = 0
        flag = 0
        if n == 0:
            return 0
        while n % 2 ==0:
            flag =1
            sum1 += 2
            n = n//2
        for i in range(3, int((n**0.5)+1), 2):
            while n % i == 0:
                flag = 1
                sum1 += self.count(i)
                n = n // i
        if n > 2:
            sum1 += self.count(n)
        if flag == 0:
            return 0
        return sum1

    def smithNum(self,n):
        if n == 1 or n==2:
            return 0
        sum1 = self.count(n)
        sump = self.primefactor(n)
        if sum1 == sump:
            return 1
        else:
            return 0