let wordA = "finite";
let wordB = "ignite";

function getLongestCommonSubstring(wordA: string, wordB: string): number[][] {
  let wordMatrix: number[][] = [];
  for(let i = 0; i < wordA.length; i++){
    let row: number[] = [];
    for(let j = 0; j < wordB.length; j++){
      let count = 0;
      if(wordA.charAt(i) == wordB.charAt(j)){
        if(i == 0 || j == 0){
          count = 1;
        }else{
          count = wordMatrix[i-1][j-1] + 1;
        }
      }else{

      }
      row.push(count);
    }
    wordMatrix.push(row);
  }
  return wordMatrix;
}

console.log(getLongestCommonSubstring(wordA, wordB));