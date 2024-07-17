//    https://www.geeksforgeeks.org/problems/longest-alternating-subsequence5951/1  



class Solution {
    // Function to find the maximum length of alternating subsequence
    alternatingMaxLength(arr) {
    let inc = 1;
    let dec = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            inc = dec + 1;
        } else if (arr[i] < arr[i - 1]) {
            dec = inc + 1;
        }
    }
    return Math.max(dec, inc);
}

}