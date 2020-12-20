/**
 * Travel a grid from the top left corner to the bottom right corner.
 * The grid can be any number of rows and any number of columns.
 * You can only move down or to the right.
 * 
 * Clarifying questions:
 *   Should we account for invalid rows and columns? Yes.
 */

/**
 * 
 * Brute Force
 * Time Complexity: O(2^(rows + cols))
 *   - Number of levels to the power of the height of the tree.
 *   - Levels keep breaking into 2 as there are only two choices: down or right.
 *   - Height either increases by 1 row or 1 col, therefore height is rows + cols.
 * 
 * Space Complexity: O(row + cols)
 *   - The call stack gets as far as the height of the tree before returning all the way back to the root.
 *   - Therefore, we only ever have a call stack that is the height of the tree.
 */
function gridTraveller(rows: number, cols: number): number {
  // if invalid rows or columns, return 0.
  if(rows === 0 || cols === 0) return 0;
  // if we hit the last cell, we are in a grid of 1, so return 1.
  if(rows === 1 && cols === 1) return 1;

  // recurse back to up one row and also back one column.
  return gridTraveller(rows - 1, cols) + gridTraveller(rows, cols - 1);
}

/**
 * 
 * Brute Force
 * Time Complexity: O(rows * cols)
 *   - Number of levels to the power of the height of the tree.
 *   - Levels don't break into 2 as we have memoized previous work.
 *   - Height either increases by 1 row or 1 col, therefore height is rows + cols.
 * 
 * 
 * Space Complexity: O(row + cols)
 *   - The call stack gets as far as the height of the tree before returning all the way back to the root.
 *   - Therefore, we only ever have a call stack that is the height of the tree.
 */
function gridTravellerMemoized(rows: number, cols: number, memo: {[key: string]: number}={}): number {
  const key = `${rows},${cols}`;
  if(key in memo) return memo[key];
  // if invalid rows or columns, return 0.
  if(rows === 0 || cols === 0) return 0;
  // if we hit the last cell, we are in a grid of 1, so return 1.
  if(rows === 1 && cols === 1) return 1;

  // recurse back to up one row and also back one column.
  memo[key] = gridTravellerMemoized(rows - 1, cols, memo) + gridTravellerMemoized(rows, cols - 1, memo);
  return memo[key];
}

console.log(gridTraveller(1, 1)); // 1
console.log(gridTraveller(2, 3)); // 3
console.log(gridTraveller(3, 2)); // 3
console.log(gridTraveller(3, 3)); // 6
// console.log(gridTraveller(18, 18)); // 2333606220 // cannot be calculated efficiently due to number of recursive calls

console.log(" ------------ ");

console.log(gridTravellerMemoized(1, 1)); // 1
console.log(gridTravellerMemoized(2, 3)); // 3
console.log(gridTravellerMemoized(3, 2)); // 3
console.log(gridTravellerMemoized(3, 3)); // 6
console.log(gridTravellerMemoized(18, 18)); // 2333606220
