/*
Imagine a robot sitting on the upper left corner of an X by Y grid. The robot can 
only move in two directions: right and down. How many possible paths are there for the robot to go
from (0,0) to (X,Y)?
*/

// Workings
/*
Grid
[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

Answer
[
  [6, 3, 1],
  [3, 2, 1],
  [1, 1, 0]
]
*/

// Recursive Method O((Row * Col)2)
function countRobotPathsRec(grid:number[][], row:number, col:number):number {
  if(row == 0){
    return 1;
  }
  if (col == 0){
    return 1;
  }
  return countRobotPathsRec(grid, row-1, col) + countRobotPathsRec(grid, row, col-1) 
}

// Memoization Method O(Row * Col)
function countRobotsPathMemo(grid:number[][], row: number, col: number): number {
  for(let r = row; r >= 0; r--){
    for(let c = col; c >=0; c--){
      if(r == row && c == col){
        grid[r][c] = 1; 
      }else if(r == row){
        grid[r][c] = grid[r][c+1];
      }else if(c == col){
        grid[r][c] = grid[r+1][c];
      }else{
        grid[r][c] = grid[r+1][c] + grid[r][c+1];
      }
    }
  }
  return grid[0][0];
}


function countRobotsPathWithOffLimitsMemo(
    grid:number[][], row: number, col: number): number {
  for(let r = row; r >= 0; r--){
    for(let c = col; c >=0; c--){
      if(grid[r][c] < 0){
        grid[r][c] = 0;
        continue;
      }
      if(r == row && c == col){
        grid[r][c] = 1; 
      }else if(r == row){
        grid[r][c] = grid[r][c+1];
      }else if(c == col){
        grid[r][c] = grid[r+1][c];
      }else{
        grid[r][c] = grid[r+1][c] + grid[r][c+1];
      }
    }
  }
  return grid[0][0];
}

(()=>{
  let theGrid = [[0, -1,  0],
                 [0, -1, -1],
                 [0, 0,  0]];
  console.log(countRobotsPathWithOffLimitsMemo(theGrid, 2, 2));
})();