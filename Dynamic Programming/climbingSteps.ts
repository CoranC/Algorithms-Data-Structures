// ways to walk up 100 steps

function countSteps(nSteps: number, amountOfSteps: number): number {
  let memo = {};
  for(let i = 1; i <= amountOfSteps; i++){
    memo[i] = i;
  }
  for(let j = amountOfSteps+1; j <= nSteps; j++){
    let count = 0;
    for(let k = 1; k <= amountOfSteps; k++){
      count += memo[j-k];
    }
    memo[j] = count
  }
  return memo[nSteps];
}

console.log(countSteps(4, 3));