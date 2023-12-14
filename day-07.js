//https://www.geeksforgeeks.org/problems/painting-the-fence3727/1

class Solution {
    countWays(n, k) {
        const MOD = 1000000007;

        if (n === 1) {
            return k;
        }
        let same = k;
        let diff = k * (k - 1);
        for (let i = 3; i <= n; i++) {
            const temp = diff;
            diff = (same + diff) * (k - 1) % MOD;
            same = temp;
        }

        return (same + diff) % MOD;
    }
}