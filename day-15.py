##js compiler not availabe for this problem so im using python for solution


#https://www.geeksforgeeks.org/problems/maximum-meetings-in-one-room/1




class Solution:
    def maxMeetings(self, N : int, S : List[int], F : List[int]) -> List[int]:
        l = []
        for i in range(N):
            l.append([S[i],F[i],i+1])
        
        l.sort(key = lambda x: x[1])
        
        ans = [l[0][2]]
        end = l[0][1]
        for i in range(1,len(l)):
            if l[i][0]>end:
                ans.append(l[i][2])
                end = l[i][1]
            
        ans.sort()
        return ans