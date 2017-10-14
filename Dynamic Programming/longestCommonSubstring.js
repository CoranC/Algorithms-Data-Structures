var wordA = "finite";
var wordB = "ignite";
function getLongestCommonSubstring(wordA, wordB) {
    var wordMatrix = [];
    for (var i = 0; i < wordA.length; i++) {
        var row = [];
        for (var j = 0; j < wordB.length; j++) {
            var count = 0;
            if (wordA.charAt(i) == wordB.charAt(j)) {
                if (i == 0 || j == 0) {
                    count = 1;
                }
                else {
                    count = wordMatrix[i - 1][j - 1] + 1;
                }
            }
            else {
            }
            row.push(count);
        }
        wordMatrix.push(row);
    }
    return wordMatrix;
}
console.log(getLongestCommonSubstring(wordA, wordB));
