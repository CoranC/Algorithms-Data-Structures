/**
 * Write a function canSum(targetSum, numbers);
 * The function should return a boolean indicating whether or not is is possible to generate the targetSum using numbers form the array.
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
 * Time Complexity: O(m ^ n)
 *   - Levels to the power of height of tree (as we explore each subtree)
 *   - If numbers was full of 1s in the worst case, we would have to keep going down the height of the tree n times until we hit 0.
 * 
 * Space Complexity: O(n)
 *   - The call stack gets as far as the height of the tree before returning all the way back to the root.
 *   - Therefore, we only ever have a call stack that is the height of the tree.
 */
function canSum(targetSum: number, numbers: number[]): boolean {
  // if we have a targetSum of 0, we are able to reach this sum through this path so return true.
  if(targetSum === 0) return true;
  // if we have gone negative, we are unable to reach this sum through this path so return false.
  if(targetSum < 0) return false;

  //iterate over the numbers and determine the difference between them and the current targetSum.
  for(const num of numbers){
    const difference = targetSum - num;
    const result = canSum(difference, numbers);
    if(result === true) return true;
  }
  return false;
}

/**
 * 
 * Iterate over the numbers in the array, and determine what other numbers can be used to reach the target.
 * 
 * n: targetSum
 * m: number of elements in numbers (causes us to make that many calls per level)
 * 
 * Memoized
 * Time Complexity: O(n * m)
 *   - Levels * height of tree (as we still need to branch m times but we don't need to explore that tree since it is cached)
 * 
 * Space Complexity: O(n)
 *   - The call stack gets as far as the height of the tree before returning all the way back to the root.
 *   - Therefore, we only ever have a call stack that is the height of the tree.
 */
function canSumMemoized(targetSum: number, numbers: number[], memo: {[key: number]: boolean} = {}): boolean {
  // if we already have visited this path, return the cached value.
  if(targetSum in memo) return memo[targetSum];
  // if we have a targetSum of 0, we are able to reach this sum through this path so return true.
  if(targetSum === 0) return true;
  // if we have gone negative, we are unable to reach this sum through this path so return false.
  if(targetSum < 0) return false;

  //iterate over the numbers and determine the difference between them and the current targetSum.
  for(const num of numbers){
    const difference = targetSum - num;
    memo[difference] = canSumMemoized(difference, numbers, memo);
    if(memo[difference] === true) return true;
  }
  return false;
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(300, [7, 14])); // false. // to expensive to call.

console.log(" ------------ ");

console.log(canSumMemoized(7, [2, 3])); // true
console.log(canSumMemoized(7, [5, 3, 4, 7])); // true
console.log(canSumMemoized(7, [2, 4])); // false
console.log(canSumMemoized(8, [2, 3, 5])); // true
console.log(canSumMemoized(300, [7, 14])); // false
