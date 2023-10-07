def majorityElementII(nums):
    new_map = {}
    for num in nums:
        if num in new_map.keys():
            print(num)
            new_map[num] += 1
        new_map[num]
    print(new_map)

majorityElementII([3,2,3])

a = [1, 2, 3]
b = [1, 2, 3]

print(a==b)