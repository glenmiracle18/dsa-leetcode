# this is a pattern for a linear search question

def locatePosition(query, items):
    """ A function that conducts a linear search """
    for idx, value in enumerate(items):
        if value == query:
            return idx # returns the index of the query value if found
    return -1 # if not found, return -1


my_list = [12, 43, 52, 53, 23, 76]
target_value = 23

position = locatePosition(target_value, my_list)

if position != -1:
    print(f"The target {target_value} has been found at {position}")
else:
    print(f"The target {target_value} is not found in the list")
