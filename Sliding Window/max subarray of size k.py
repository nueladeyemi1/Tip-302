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
    print(cur_max)

# test cases 
max_subarray_of_size_k(3, [2, 1, 5, 1, 3, 2])
max_subarray_of_size_k(2, [2, 3, 4, 1, 5])






# def new_func(k, arr):
#     sum = 0
#     curr_sum = -1
#     slider_start = 0
#     for pointer in range(len(arr)):
#         sum += arr[pointer]
#         # print(sum)
#         if pointer >= k - 1:
#             if sum > curr_sum:
#                 curr_sum = sum
#             sum -= arr[slider_start]
#             slider_start += 1
#     print(curr_sum)


# new_func(3, [2,1,5,1,3,2])
# new_func(2, [2, 3, 4, 1, 5])























