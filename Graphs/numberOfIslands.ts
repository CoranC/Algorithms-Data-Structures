/**
 * https://leetcode.com/problems/number-of-islands/
 * Given an m x n 2D binary grid grid which represents a map of 1s (land) and 0s (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 */

const threeIslands = [
  [1, 1, 0, 0, 0,],
  [1, 1, 0, 0, 0,],
  [0, 0, 1, 0, 0,],
  [0, 0, 0, 1, 1,],
  [0, 0, 0, 1, 1,]
];
const oneIsland = [
  [1, 1, 1],
  [0, 1, 0],
  [1, 1, 1],
];

/**
 * Counts the unique number of islands in a grid.
 * Runs in O(V+E) time.
 * @param islands A matrix of cells where 1 indicates land and 0 indicates water.
 * @returns number of islands in a grid.
 */
function main(islands: number[][]){
  let islandCount = 0;
  for(let row = 0; row < islands.length; row++){
    for(let col = 0; col < islands[row].length; col++){
      if(islands[row][col] === 0) continue;
      islandCount++;
      landToWater(islands, row, col);
    }
  }
  return islandCount;
}

/**
 * Runs DFS on a grid, converting any connected land cell to water.
 * @param matrix A matrix of cells where 1 indicates land and 0 indicates water.
 * @param row 
 * @param col 
 */
function landToWater(matrix: number[][], row: number, col: number) {
  if(row < 0 || row >= matrix.length) return;
  if(col < 0 || col >= matrix[0].length) return;
  if(matrix[row][col] === 0) return;
  matrix[row][col] = 0;
  landToWater(matrix, row + 1, col);
  landToWater(matrix, row - 1, col);
  landToWater(matrix, row, col + 1);
  landToWater(matrix, row, col - 1);
}

console.log(main(oneIsland));
console.log(main(threeIslands));
