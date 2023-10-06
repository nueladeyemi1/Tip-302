class Solution(object):
    def maxArea(self, height):

        area = 0
        start_pointer = 0
        end_pointer = len(height) - 1

        while end_pointer > start_pointer:
            if height[start_pointer] < height[end_pointer]:
                area = max(area, min(height[start_pointer], height[end_pointer]) * end_pointer - start_pointer)

        """
        :type height: List[int]
        :rtype: int
        """
        