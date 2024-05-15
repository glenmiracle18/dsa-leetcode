// this is the optimized  implementation of the queue

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    }
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

// call

const queue = new Queue();

queue.enqueue(15);
queue.enqueue(16);
queue.enqueue(17);
queue.enqueue(18);
queue.print();
queue.isEmpty();
