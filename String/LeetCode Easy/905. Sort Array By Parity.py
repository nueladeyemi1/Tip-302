class Solution(object):
    def sortArrayByParity(self, nums):
        j = 0
        i = 0
        while j < len(nums):
            if nums[j] % 2 == 0:
                nums[i], nums[j] = nums[j], nums[i]
                # nums[j] = nums[i]
                i += 1
            j += 1
        return nums

        """
        :type nums: List[int]
        :rtype: List[int]
        """

# SOLUTION 2

class Solution(object):
    def sortArrayByParity(self, nums):
        odd_holder = []
        even_holder = []
        for i in range(0, len(nums)):
            if nums[i] % 2 != 0:
                odd_holder.append(nums[i])
            else:
                even_holder.append(nums[i])
        return (even_holder + odd_holder)

        """
        :type nums: List[int]
        :rtype: List[int]
        """
        

