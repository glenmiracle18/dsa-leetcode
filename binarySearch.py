def binarySearch(lst, target):
    """ the practical implimentation of binary search """

    low, high = 0, len(lst) - 1
    while low <= high:
        mid = (low + high) // 2 # finds the mid of the lst

        if lst[mid] == target:
            return mid

        # checking for the side where the target is found
        if target < lst[mid]:
            low = mid - 1
        else:
            high = mid + 1

    return -1

# function call
lst = [4, 5, 6, 7, 8, 0, 1, 2, 3]
target = 2

result = binarySearch(lst, target)

if result == -1:
    print(f"Target {target} not found in list")
else:
    print(f"Target {target} found at index {result}")
