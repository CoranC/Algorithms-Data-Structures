# Cutting Rods
# https://www.udemy.com/dynamic-programming/learn/v4/t/lecture/7857042?start=0

prices = [1, 5, 8, 9, 10]

0  1  2  3  4  5
0, 1, 5, 8, 9, 10

def revenue_cut_rods_recursive(n, prices):
  if n == 0:
    return 0
  max_val = -1
  for i in range(0, n):
    temp = prices[n-i-1] + revenue_cut_rods_recursive(i, prices)
    if temp > max_val:
      max_val = temp
  return max_val


def revenue_cut_rods_dynamic(n, prices):
  revenue_per_inch = []
  # 0 inches gets 0 dollars
  revenue_per_inch.append(0)
  # for each inch of rod between 1 and n
  for i in range(1, n+1):
    max_val = -1
    print "\nFor inch {}".format(i)
    # for each inch between 1 and i
    for j in range(1, i+1):
      # get price for a section of inch plus the best revenue for the remaining inches
      temp = prices[j-1] + revenue_per_inch[i-j]
      print "\tInch {} + previous Inch {}".format(j, i-j)
      print "\t     {} +               {} = {}".format(prices[j-1], revenue_per_inch[i-j], temp)
      if temp > max_val:
        max_val = temp
    print "best is {}".format(max_val)
    # append best value for that inch
    revenue_per_inch.append(max_val)
  return revenue_per_inch[n]
