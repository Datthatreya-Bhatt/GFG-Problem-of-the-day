//      https://www.geeksforgeeks.org/problems/sum-of-prime4751/1



class Solution {
    /**
    * @param number n

    * @returns number[]
    */
getPrimes(n) {
        function is_prime(x) {
            if (x <= 1) {
                return false;
            }
            if (x <= 3) {
                return true;
            }
            if (x % 2 === 0 || x % 3 === 0) {
                return false;
            }
            let i = 5;
            while (i * i <= x) {
                if (x % i === 0 || x % (i + 2) === 0) {
                    return false;
                }
                i += 6;
            }
            return true;
        }

        let a = -1, b = -1;
        for (let i = 1; i <= Math.floor(n / 2); i++) {
            if (is_prime(i) && is_prime(n - i)) {
                a = i;
                b = n - i;
                break;
            }
        }

        return [a, b];
    }
    
}

