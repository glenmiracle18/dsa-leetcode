// this is the implementation of  alist node and linked list
// node class

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// list class
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // this contructor accepts multiple listNode arguments and link them
  append(...nodes) {
    let current;

    // if the list is not empty, set the head to the first node
    if (!this.head) {
      this.head = nodes[0];
      current = this.head;
    } else {
    // otherwise, start from the last node
      current = this.head;
      while (current.next) {
        current = current.next
      }
    }

    // link the remaining nodes
    for (let i = 0; i < nodes.length; i++) {
      current.next = nodes[i];
      current = current.next;
    }
  }

  // get the size of the list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count ++;
      node = node.next;
    }
    return count;
  }

  // empties the list
  clear () {
    this.head = null;
  }

  // returns the last node of the linkedList
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  // returns the first node of the linked list
  getFirst() {
    return this.head;
  }
}

  // create the linked list with multiple nodes
  let node1 = new ListNode(2);
  let node2 = new ListNode(5);
  let node3 = new ListNode(7);
  let node4 = new ListNode(14);

  // creation of the linkedList
  let list = new LinkedList();
  list.append(node1, node2, node3, node4); // link the nodes together

  //logs
  console.log(list.head.data);
  console.log(list.size());
  console.log(list.getLast());
  console.log(list.getFirst());

