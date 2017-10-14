// http://www.geeksforgeeks.org/longest-common-subsequence/

/*
We have discussed Overlapping Subproblems and Optimal Substructure properties in Set 1 and Set 2 respectively. We also discussed one example problem in Set 3. Let us discuss Longest Common Subsequence (LCS) problem as one more example problem that can be solved using Dynamic Programming.

LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”. So a string of length n has 2^n different possible subsequences.

It is a classic computer science problem, the basis of diff (a file comparison program that outputs the differences between two files), and has applications in bioinformatics.

Examples:
LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
*/

// Recursive approach O(2n) in the worst case of an entire mismatch of chars
function lcsR(str1: string, str2: string): number {
  let n = str1.length, m = str2.length;
  if(n == 0 || m == 0){
    return 0;
  }
  if(str1[n-1] == str2[m-1]){
    return 1 + lcsR(str1.substr(0, n-1), str2.substr(0, m-1));
  }else{
    return Math.max(lcsR(str1, str2.substr(0, m-1)),
        lcsR(str1.substr(0, n-1), str2));
  }
}


function lcsMemo(str1: string, str2: string): number {
  let n = str1.length, m = str2.length;
  let matrix: number[][] = [];
  for(let i = 0; i < n+1; i++){
    matrix[i] = [];
    for(let j = 0; j < m+1; j++){
      matrix[i][j] = 0;
    }
  }
  for(let i = 0; i <= n; i++){
    for(let j = 0; j <= m; j++){
      if(i == 0 || j == 0){
        matrix[i][j] = 0;
      }else if(str1[i-1] == str2[j-1]){
        matrix[i][j] = 1 + matrix[i-1][j-1];
      }else{
        matrix[i][j] = Math.max(matrix[i][j-1], matrix[i-1][j]);
      }
    }
  }
  return matrix[n][m];
}

console.log("Memo");
console.log(lcsMemo('ABCDGH', 'AEDFHR')); // “ADH” of length 3.
console.log(lcsMemo('AGGTAB', 'GXTXAYB')); // “GTAB” of length 4.

console.log("--------");

console.log("Recursion");
console.log(lcsR('ABCDGH', 'AEDFHR')); // “ADH” of length 3.
console.log(lcsR('AGGTAB', 'GXTXAYB')); // “GTAB” of length 4.


