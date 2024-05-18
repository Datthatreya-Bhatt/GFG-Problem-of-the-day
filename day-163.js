//      https://www.geeksforgeeks.org/problems/find-the-highest-number2259/1



class Solution {
    findPeakElement(a) {
        a.sort((a,b)=> a-b);
        return a[a.length - 1];
    }
}