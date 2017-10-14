var prices = [1, 5, 8, 9, 10];
function maxRevenueForRod(prices) {
    var bestRevenuePerInch = [0];
    for (var i = 1; i <= prices.length; i++) {
        var currentMaxForInchAtIndex = 0;
        for (var j = 1; j <= i; j++) {
            var tempMaxForInchAtIndex = prices[j - 1] + bestRevenuePerInch[i - j];
            if (tempMaxForInchAtIndex > currentMaxForInchAtIndex) {
                currentMaxForInchAtIndex = tempMaxForInchAtIndex;
            }
        }
        bestRevenuePerInch.push(currentMaxForInchAtIndex);
    }
    return bestRevenuePerInch;
}
console.log(maxRevenueForRod(prices));
