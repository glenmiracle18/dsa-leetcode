// this is the implementation of a linked list in javascript
// as we all know, a linked list contain of a node that contains a pointer
// that point to the element of the next node

// node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

// function call
const list = new LinkedList();
console.log("List is empty", list.isEmpty());
console.log("List Size: ", list.getSize());
