# https://www.geeksforgeeks.org/problems/all-unique-permutations-of-an-array/1


class Solution:
    def permutations(self,h,arr,index):
        if index==len(arr):
            h.add(tuple(arr))
            return
        for i in range(index,len(arr)):
            arr[index],arr[i]=arr[i],arr[index]
            self.permutations(h,arr,index+1)
            arr[index],arr[i]=arr[i],arr[index]
    def uniquePerms(self, arr, n):
        # code here 
        h,ans=set(),[]
        self.permutations(h,arr,0)
        for i in h: ans.append(i)
        ans.sort()
        return ans