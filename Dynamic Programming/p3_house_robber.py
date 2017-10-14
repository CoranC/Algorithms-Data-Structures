# House Robber
# https://www.udemy.com/dynamic-programming/learn/v4/t/lecture/7857048?start=0

# You want to rob houses but can't rob any houses adjacent to each other
# So you have two options: either Do or Dont rob house n. 
# If you do, you can't rob house n - 1

house_revenue = [1,2,3,4,5,6,7,8]

def rob_houses(house_revenue):
  number_of_houses = len(house_revenue)
  memo = [0]
  memo.append(house_revenue[1])
  for i in range(2, number_of_houses+1):
    i_val = max(memo[i-1], house_revenue[i-1] + memo[i - 2])
    memo.append(i_val)
  return memo[number_of_houses]

"""
       
memo = [0, #0=0 
        1, #1=1  
       (1, 2 + 0), #2=2
       (2, 3 + 1), #3=4
       (4, 4 + 2), #4=6
...       ]

""