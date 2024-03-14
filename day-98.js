//  https://www.geeksforgeeks.org/problems/largest-subsquare-surrounded-by-x0558/1



class Solution {
    /**
    * @param number n
    * @param string[][] a
    
    * @returns number
    */
        largestSubsquare(n, a) {
            let ver = new Array(n).fill(0).map(() => new Array(n).fill(0));
            let hor = new Array(n).fill(0).map(() => new Array(n).fill(0));
            let side = 0;
        
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (a[i][j] === 'X') {
                        ver[i][j] = i === 0 ? 1 : ver[i - 1][j] + 1;
                        hor[i][j] = j === 0 ? 1 : hor[i][j - 1] + 1;
                    }
                }
            }
        
            for (let i = n - 1; i >= 0; i--) {
                for (let j = n - 1; j >= 0; j--) {
                    let val = Math.min(ver[i][j], hor[i][j]);
                    while (val > side) {
                        if (ver[i][j - val + 1] >= val && hor[i - val + 1][j] >= val) {
                            side = val;
                        }
                        val--;
                    }
                }
            }
        
            return side;
        }
    
    }
