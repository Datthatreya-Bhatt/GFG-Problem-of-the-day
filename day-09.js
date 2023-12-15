//https://www.geeksforgeeks.org/problems/count-of-strings-that-can-be-formed-using-a-b-and-c-under-given-constraints1135/1


class Solution {
    //Function to count strings of n length such that each string can be formed from a, b and c
    countStr(n) {
        //your code here       
        let length = n;
        // Case 1: Strings with all 'a'
        let strings_all_a = 1;

        // Case 2: Strings with at most 1 'b'
        let strings_at_most_1_b = length;

        // Case 3: Strings with at most 1 'c'
        let strings_at_most_1_c = length;

        // Case 4: Strings with one 'b' and one 'c'
        let strings_one_b_one_c = length * (length - 1)

        // Case 5: Strings with two 'c'
        let strings_two_c = (length * (length - 1)) / 2

        // Case 6: Strings with one 'b' and two 'c'
        let strings_one_b_two_c = (length * (length - 1) * (length - 2)) / 2

        let total_strings = strings_all_a + strings_at_most_1_b + strings_at_most_1_c + strings_one_b_one_c + strings_two_c + strings_one_b_two_c

        return total_strings
    }
}