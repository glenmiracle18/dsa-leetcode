# this can be implemented using a binary search
def search_rotated_array(lst, target):
    low, high = 0, len(lst) - 1

    while low <= high:
        mid = (low + high) // 2

        if lst[mid] == target:
            return mid

        # check which half is normally ordered
        if lst[low] <= lst[mid]:
            # left half is ordered
            if lst[low] <= target < lst[mid]:
                high = mid - 1
            else:
                low = mid + 1

        else:
            # right half is ordered
            if lst[low] <= target < lst[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1 # target is not found

# function call
rotated_arr = [4, 5, 6, 7, 0, 1, 2]
target_element = 1

result = search_rotated_array(rotated_arr, target_element)

if result != -1:
    print(f"Target element {target_element} found at index {result}")
else:
    print(f"Target element {target_element} not found in rotated list")

