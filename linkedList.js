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


// this constructor accepts multiple listNode arguments and link them
append(...nodes) {
  if (!this.head) {
    this.head = nodes[0]; // set head to the first node
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next; // traverse to the last node
    }
    current.next = nodes[0]; // link last node to the first of new nodes
    for (let i = 1; i < nodes.length; i++) { //link the remaining nodes
      current.next = nodes[i]
      current = current.next;
    }
  }
}

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
clear() {
  this.head = null
}

// returns the last node of the linkedList
getLast (); {
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

// create the linked list with multiple nodes
let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(9);


// creation of the linkedList
let list = new LinkedList();
list.append(node, node2, node3); // link the nodes together

console.log(list.head.data) // return 2
console.log(size())
console.log(geLast())
console.log(getFirst())



