// optimized LinkedLIst

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

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  delete(value) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }

    // checks if the value to be deleted is the head node
    if (this.head.value === value) {
      this.head = this.head.next; // moves the head pointer to the next in line
      this.size--; // reduce the size
      return;
    }

    let prev = null;
    let curr = this.head;

    while (curr !== null && curr.value !== value) {
      prev = curr;
      curr = curr.next;
    }

    if (curr === null) {
      console.log("value not found in list");
      return;
    }

    prev.next = curr.next;
    this.size--;
  }

  print() {
    if (this.isEmpty()) {
      //empty list cases
      console.log("list is empty");
    } else {
      let curr = this.head; // values used to traverse the list and collect values
      let listValues = "";
      while (curr) {
        // while the curr is truthy,
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

// function call
const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print();
console.log("List Size: ", list.getSize());

list.delete(20);
list.print();
