// this is the optimized  implementation of the queue

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  // adding element to the queue
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
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

// function call

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(23);
queue.enqueue(44);

console.log(queue.isEmpty());
queue.print();

console.log(queue.peek());
console.log(queue.size());
