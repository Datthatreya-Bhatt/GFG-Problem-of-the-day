//      https://www.geeksforgeeks.org/problems/compare-two-fractions4438/1



class Solution {
    /**
    * @param string str

    * @returns string
    */
    compareFrac(str) {
        let [s1, s2] = str.split(", ");
        let [num1, num2] = s1.split("/");
        let val1 = parseInt(num1) / parseInt(num2);
        let [num3, num4] = s2.split("/");
        let val2 = parseInt(num3) / parseInt(num4);
        if (val1 === val2) {
            return "equal";
        }
        if (val1 > val2) {
            return s1;
        }
        return s2;
    }

    
}