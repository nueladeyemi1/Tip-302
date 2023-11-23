# def majorityElementII(nums):
#     new_map = {}
#     for num in nums:
#         if num in new_map.keys():
#             print(num)
#             new_map[num] += 1
#         new_map[num]
#     print(new_map)

# majorityElementII([3,2,3])

# a = [1, 2, 3]
# b = [1, 2, 3]

# print(a==b)

# def isSameReflection(word1, word2):
#     c = 0
#     for i in range(len(word1)):
#         print(word1[i:])
#         if word2.startswith(word1[i:]):
#             c += 1
#     print(c)


# isSameReflection('sample', 'pelsam')
from math import floor

def reverseArray(arr):
    start_pointer = 0
    end_pointer = len(arr) - 1
    counter = floor(len(arr)-1)/2

    while counter >= 0:
        arr[start_pointer], arr[end_pointer] = arr[end_pointer], arr[start_pointer]
        end_pointer -= 1
        start_pointer += 1
        counter -= 1
    print(arr)


reverseArray([3, 4, 2, 7, 1])