def totalFruit(fruits):
        hash_map = {}
        max_length = 0
        slider_start = 0
        for pointer in range(len(fruits)):
            if fruits[pointer] not in hash_map:
                hash_map[fruits[pointer]] = 0
            hash_map[fruits[pointer]] += 1
        
        while len(hash_map) > 2:
            hash_map[fruits[slider_start]] -= 1
            if hash_map[fruits[slider_start]] == 0:
                del hash_map[fruits[slider_start]]
            slider_start += 1
        
        max_length = max(max_length, pointer - slider_start + 1)

        print(max_length)


totalFruit([1,2,1])


# Runtime: 693 ms, faster than 84.31% of Python3 online submissions for Fruit Into Baskets.
# Memory Usage: 24.6 MB, less than 18.65% of Python3 online submissions for Fruit Into Baskets.