// https://www.geeksforgeeks.org/problems/buy-maximum-stocks-if-i-stocks-can-be-bought-on-i-th-day/1


class Solution {
    buyMaximumProducts(n, k, price) {
        let stocks = [];

        for (let i = 0; i < n; i++) {
            stocks.push([price[i], i + 1]);
        }
        stocks.sort((a, b) => a[0] - b[0]);
        let maxStocks = 0;
        for (let i = 0; i < n; i++) {
            let price = stocks[i][0];
            let day = stocks[i][1];

            let maxBuyableStocks = Math.min(k / price, day);

            maxStocks += maxBuyableStocks;
            k -= maxBuyableStocks * price;
        }
        return Math.floor(maxStocks);
    }
}