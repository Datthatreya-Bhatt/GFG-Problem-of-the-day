// https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1



class Solution 
{
    //Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n)
    {
        // code here
        arr.sort((a, b) => {
            let first = a.value / a.weight;
            let second = b.value / b.weight;
            return second - first;
        });
        
        let answer = 0.0;
        for (let x of arr) {
            if (x.weight <= W) {
                answer += x.value;
                W -= x.weight;
            } else {
                answer += W * (x.value / x.weight);
                W -= W;
            }
        }
        
        return answer;
    }
}