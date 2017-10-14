# Climbing Stairs
# https://www.udemy.com/dynamic-programming/learn/v4/t/lecture/7857040?start=0

def climb_steps_recursive(n_stairs):
  if n_stairs == 1:
    return 1
  if n_stairs== 2:
    return 2
  else:
    return climb_steps_recursive(n_stairs-1) + climb_steps_recursive(n_stairs-2)


def climb_steps_dynamic(n_stairs):
  memo = {}
  memo[1] = 1
  memo[2] = 2
  for i in range(3, n_stairs+1):
    memo[i] = memo[i-1] + memo[i-2]
  return "{:,}".format(memo[n_stairs])


def climb_steps_dynamic_number_of_steps(n_stairs, number_of_steps_can_be_taken):
  memo = {}
  for steps in range(1, number_of_steps_can_be_taken+1):
    memo[steps] = steps
  for i in range(number_of_steps_can_be_taken+1, n_stairs+1):
    count = 0
    for j in range(1, number_of_steps_can_be_taken+1):
      print "{i} - {j}".format(i=i, j=j)
      count += memo[i-j]
    memo[i] = count
  return "{:,}".format(memo[n_stairs])