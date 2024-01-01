def max_subarray_of_size_k(k, arr):
    # code here
    # sub_arr = []
    sum = 0
    cur_max = -1
    start = 0
    for pointer in range(len(arr)):
        sum += arr[pointer]
        if pointer >= k - 1:
            if sum > cur_max:
                cur_max = sum
            sum -= arr[start]
            start += 1

    # return -1
    # print(cur_max)
    return cur_max

# test cases 
max_subarray_of_size_k(3, [2, 1, 5, 1, 3, 2])
max_subarray_of_size_k(2, [2, 3, 4, 1, 5])



def test(str, k):
    slider_start = 0
    hash_map = {}
    max_length = 0
    for pointer in range(len(str)):
        right_value = str[pointer]
        if right_value not in hash_map:
            hash_map[right_value] = 0
        hash_map[right_value] += 1

        while len(hash_map) > k:
            left_value = str[slider_start]
            hash_map[left_value] -= 1
            if hash_map[left_value] == 0:
                del hash_map[left_value]
            slider_start += 1
        max_length = max(max_length, pointer - slider_start + 1)

    print(max_length)

    # print(hash_map, len(hash_map))

test('araaci', 2)
test('araaci', 1)
test('cbbebi', 3)
test('araaci', 3)


# def new_func(k, arr):
#     sum = 0
#     max_sum = -1
#     slider_start = 0
#     for pointer in range(len(arr)):
#         sum += arr[pointer]
#         if pointer >= k-1:
#             if sum > max_sum:
#                 max_sum = sum
#             sum -= arr[slider_start]
#             slider_start += 1
#     print(max_sum)
#     return max_sum


# new_func(3, [2,1,5,1,3,2])
# new_func(2, [2, 3, 4, 1, 5])























