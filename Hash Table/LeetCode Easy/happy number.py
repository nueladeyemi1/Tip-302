def isHappy(n):
    check = []
    sum = 0
    loop_sum = n
    while loop_sum != 1 and not loop_sum in check:
        for _, val in enumerate(str(loop_sum)):
            sum += int(val)**2
        sum, loop_sum = 0, sum

    if loop_sum == 1: return True
    
    return False



isHappy(19)
isHappy(2)

# Runtime: 41 ms, faster than 64.66% of Python3 online submissions for Happy Number.
# Memory Usage: 17.3 MB, less than 17.76% of Python3 online submissions for Happy Number.