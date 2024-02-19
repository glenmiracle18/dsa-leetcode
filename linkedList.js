// this is the implementation of a list node and a linked list

// node class
class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// list class
class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

// putting it alltogether
let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(9)

node1.next = node2
node2.next = node3


// helper functions

// get the size of the linkelist
size() {
  let count = 0;
  let node  = this.head;
  while (node) {
    count ++;
    node = node.next
  }
  return count;
}

// empties the list
clear () {
  this.head = null
}

// returns the last node of the linkedList
getLast () {
  let lastNode = this.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next
    }
  }
  return lastNode;
}


// returns the first node of the linkedList
getFirst() {
  return this.head
}



// creation of the linkedList
let list = new LinkedList(node1)
console.log(list.head.data) // return 2

console.log(size())
console.log(geLast())
console.log(getFirst())



