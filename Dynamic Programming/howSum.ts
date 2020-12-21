/**
 * Write a function howSum(targetSum, numbers);
 * The function should return an array containing any combinaion of elements that add up to exactly the targetsum.
 * If there is no combination that add up to exactly the targetSum, then return null.
 * You may use an element of the array as many times as needed.
 * You may assume that all input numbers are nonnegative.
 * 
 */

/**
 * 
 * Iterate over the numbers in the array, and determine what other numbers can be used to reach the target.
 * 
 * n: targetSum
 * m: number of elements in numbers (causes us to make that many calls per level)
 * 
 * Brute Force
 * Time Complexity: O(m ^ n * n) //
 *   - Levels to the power of height of tree (as we explore each subtree) * the copying of the array (happens in each recursive call)_
 *   - If numbers was full of 1s in the worst case, we would have to keep going down the height of the tree n times until we hit 0.
 * 
 * Space Complexity: O(n)
 *   - The call stack gets as far as the height of the tree before returning all the way back to the root.
 *   - Therefore, we only ever have a call stack that is the height of the tree.
 */
function howSum(targetSum: number, numbers: number[]): number[]|null {
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  for(let num of numbers){
    const difference = targetSum - num;
    const result = howSum(difference, numbers);
    if(result !== null) {
      return [...result, num];
    }
  }
  return null;
}

/**
 * 
 * Iterate over the numbers in the array, and determine what other numbers can be used to reach the target.
 * 
 * n: targetSum
 * m: number of elements in numbers (causes us to make that many calls per level)
 * 
 * Brute Force
 * Time Complexity: O(m * n^2)
 *   - Levels * height of the tree. 
 *   - If numbers was full of 1s in the worst case, we would have to keep going down the height of the tree n times until we hit 0.
 * 
 * Space Complexity: O(n^2)
 *   - The call stack gets as far as the height of the tree before returning all the way back to the root.
 *   - Need to add on the extra space used by the memo object. The max amount of elements in any array in the object will be n (imagine n 1s).
 */
function howSumMemoized(targetSum: number, numbers: number[], memo: {[key: number]: number[]|null} = {}): number[]|null {
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  for(let num of numbers){
    const difference = targetSum - num;
    const result = howSumMemoized(difference, numbers, memo);
    memo[targetSum] = result;
    if(result !== null) {
      return [...result, num];
    }
  }
  memo[targetSum] = null;
  return null;
}


console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])); // null // to expensive to call.

console.log(" ------------ ");

console.log(howSumMemoized(7, [2, 3])); // [3, 2, 2]
console.log(howSumMemoized(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSumMemoized(7, [2, 4])); // null
console.log(howSumMemoized(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSumMemoized(100000, [7, 14])); // null

