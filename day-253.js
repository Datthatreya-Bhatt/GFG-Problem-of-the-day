//      https://www.geeksforgeeks.org/problems/product-array-puzzle4525/1


class Solution {
    productExceptSelf(nums) {
        let left = 1;
        let right = 1;
        const ans = new Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            ans[i] = left;
            left *= nums[i];
        }

        for (let j = nums.length - 1; j >= 0; j--) {
            ans[j] *= right;
            right *= nums[j];
        }

        return ans;
    }
}
