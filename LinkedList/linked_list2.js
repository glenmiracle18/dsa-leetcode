// second implememtation of linked list

// each node
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// the list definition
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

// append method or constructor func
    append(...nodes) {
        let current;

        if (!this.head) {
            this.head = nodes[0];
            current = this.head;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
        }

        // loop through the nodes and link them
        nodes.forEach((node) => {
            current.next = node;
            current = current.next;
        });
    }

    // get the size of the list
    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count ++;
            node = node.next;
        }
        return count;
    }

    // empties the list
    clear() {
        this.head = null;
    }

    // returns the last node of the linkedList
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
        }
    }
}