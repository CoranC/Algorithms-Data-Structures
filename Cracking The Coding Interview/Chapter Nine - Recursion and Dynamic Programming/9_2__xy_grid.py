"""
Imagine a robot sitting on the upper left corner of an X by Y grid. The robot can 
only move in two directions: right and down. How many possible paths are there for the robot to go
from (0,0) to (X,Y)?
"""

#Workings
"""
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
"""

def count_robot_paths_rec(grid, row, col):
  if row == 0:
    return 1
  if col == 0:
    return 1
  return count_robot_paths_rec(grid, row-1, col) + count_robot_paths_rec(grid, row, col-1) 

def count_robot_paths_rec(grid, row, col):
  grid[row][col] = 1



if __name__ == "__main__":
  the_grid = [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]]
  print count_robot_paths_rec(the_grid, 2, 2)