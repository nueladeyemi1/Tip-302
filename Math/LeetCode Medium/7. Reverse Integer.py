class Solution(object):
    def reverse(self, x):
        reverse = 0
        decider = 1     #The decider will help determine if x is positive or negative
        if x < 1:
            x = abs(x)
            decider = -1

        while x > 0:
            remainder = x % 10
            #The below handle reverse for negative
            if decider < 0:
                reverse = (reverse * 10) - remainder
            #The below handle reverse for positive
            if decider > 0:
                reverse = (reverse * 10) + remainder
            x = x // 10
        
        if reverse > (2**31 - 1) or reverse < -(2**31):
            return 0
        return reverse
        """
        :type x: int
        :rtype: int
        """
        