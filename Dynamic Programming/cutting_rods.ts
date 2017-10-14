let prices = [1, 5, 8, 9, 10];

function maxRevenueForRod(prices: number[]): number[] {
  let bestRevenuePerInch = [0];
  for(let i = 1; i <= prices.length; i++){
    let currentMaxForInchAtIndex = 0;
    for(let j = 1; j <= i; j++){
      let tempMaxForInchAtIndex = prices[j-1] + bestRevenuePerInch[i-j];
      if(tempMaxForInchAtIndex > currentMaxForInchAtIndex){
        currentMaxForInchAtIndex = tempMaxForInchAtIndex;
      }
    }
    bestRevenuePerInch.push(currentMaxForInchAtIndex);
  }
  return bestRevenuePerInch;
}

console.log(maxRevenueForRod(prices));
