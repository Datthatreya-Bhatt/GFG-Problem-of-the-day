//  https://www.geeksforgeeks.org/problems/insert-an-element-at-the-bottom-of-a-stack/1



class Solution {
    //Function to insert an element at the bottom of a stack.
    insertAtBottom(st, x) {
        //your code here
        st.unshift(x)
        return st;
    }
}