//      https://www.geeksforgeeks.org/problems/validate-an-ip-address-1587115621/1


class Solution {
    isInteger(string) {
        try {
            parseInt(string);
            return true;
        } catch (error) {
            return false;
        }
    }

    isValid(str) {
        let arr = str.split('.');
        if (arr.length !== 4) {
            return false;
        }
        for (let i of arr) {
            if (!this.isInteger(i) || parseInt(i) < 0 || parseInt(i) > 255) {
                return false;
            }
        }
        return true;
    }
}