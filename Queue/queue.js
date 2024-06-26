// a sequence collection of element that follows the first-in first-out
// (FIFO) princinple.

class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  print() {
    console.log(toString(this.items));
  }
}

// call

const queue = new Queue();

queue.enqueue(15);
queue.enqueue(16);
queue.enqueue(17);
queue.enqueue(18);
// queue.print();
queue.isEmpty();
queue.peek();
