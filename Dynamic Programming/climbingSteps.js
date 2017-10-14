// ways to walk up 100 steps
function countSteps(nSteps, amountOfSteps) {
    var memo = {};
    for (var i = 1; i <= amountOfSteps; i++) {
        memo[i] = i;
    }
    for (var j = amountOfSteps + 1; j <= nSteps; j++) {
        var count = 0;
        for (var k = 1; k <= amountOfSteps; k++) {
            count += memo[j - k];
        }
        memo[j] = count;
    }
    return memo[nSteps];
}
console.log(countSteps(4, 3));
