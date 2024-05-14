// In this type of queue, the size is fixed and a single block of memory
// is used as if the the first element is connected to the last element.

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity; /// how much the queue can carry
    this.items = new Array(capacity); // new array from the capacity, since it has a fixed lenght
    this.currentLength = 0;
    this.rear = -1; // not pointing to any position at initialization
    this.front = -1; // not connected toany postition at initization
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
      this.rear = (this.rear + 1) % this.capacity; // brings the rear pointer in place
      this.items[this.rear] = element;
      this.currentLength += 1; // increment the queue length
      if (this.front === -1) {
        this.front = this.rear; // also bringing the front in place
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      // verifies is the array is empty and returns null
      return null;
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
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
