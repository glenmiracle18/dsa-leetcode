// In this type of queue, the size is fixed and a single block of memory
// is used as if the the first element is connected to the last element.

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      //checks if the queue is empty
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength + 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
      return null;
    }

    // item to be dequeued
    const item = this.items[this.front];
    delete this.items[item];
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
  }

  peek() {
    if (this.isEmpty()) {
      return this.items[this.front];
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

// call
const q = new CircularQueue(5);

console.log(q.isEmpty());

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

console.log(q.isFull());
q.print();
console.log(q.peek());
