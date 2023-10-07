class Solution(object):
    def maxArea(self, height):

        area = 0
        start_pointer = 0
        end_pointer = len(height) - 1

        while end_pointer > start_pointer:
            if height[start_pointer] > height[end_pointer]:
                area = max(area, min(height[start_pointer], height[end_pointer])*(end_pointer - start_pointer))
                end_pointer -= 1
                # start_pointer += 1
            start_pointer += 1
            # end_pointer -= 1
        
        print(area)

        """
        :type height: List[int]
        :rtype: int
        """


my_list = Solution()

my_list.maxArea([1, 8, 9, 6, 2, 5, 4, 8, 3, 7])