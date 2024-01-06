# Input: String="aaacb", Pattern="abc"
# Output: true
# Explanation: The string contains "acb" which is a permutation of the given pattern.

def permutation_in_string(string, pattern):
    left_slider = 0
    match = 0
    pattern_hashmap = {}

    for i in range(len(pattern)):
        if pattern[i] not in pattern_hashmap:
            pattern_hashmap[pattern[i]] = 0
        pattern_hashmap[pattern[i]] += 1

    for right_slider in range(len(string)):
        if string[right_slider] in pattern_hashmap:
            pattern_hashmap[string[right_slider]] -= 1
            if pattern_hashmap[string[right_slider]] == 0:
                match += 1

        if match == len(pattern_hashmap):
            return True
        
        if right_slider > len(pattern):
            left_slider += 1
            if string[left_slider] in pattern_hashmap:
                if pattern_hashmap[right_slider] == 0:
                    match -= 1
                pattern_hashmap[string[left_slider]] += 1

    print(pattern_hashmap, match)


permutation_in_string('aaacb', 'abc')
