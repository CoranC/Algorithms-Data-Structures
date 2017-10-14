"""
A child is running up a staircase with n steps, and can hop either 1 step, 2
steps or 3 steps at a time. Implement a method to count how many possible ways 
the child can run up the stairs.
"""
# Recursive Method O(3n)
def climb_stairs_rec(steps):
  if n == 1:
    print "returning 1"
    return 1
  if n == 2:
    print "returning 2"
    return 2
  if n == 3:
    print "returning 3"
    return 3
  return climb_stairs_rec(steps-1) + climb_stairs_rec(steps-2) + climb_stairs_rec(steps-3)

# Memoization Method O(n)
def climb_stairs_memo(steps):
  memo = {}
  memo[1] = 1
  memo[2] = 2
  memo[3] = 3
  for i in xrange(4, steps+1):
    memo[i] = memo[i-1] + memo[i-2] + memo[i-3]
  return memo[steps]

if __name__ == "__main__":
  print climb_stairs_memo(500)