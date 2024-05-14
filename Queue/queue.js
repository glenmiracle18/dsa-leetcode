// a sequence collection of element that follows the first-in first-out 
// (FIFO) princinple.

class Queue {
  constructor(){
    this.items = [] // the queue array
  }

  // add elements to the queue
  enqueue(element){
    this.items.push(element)
  }

  // remove the first item of the queue
  dequeue(){
    this.items.shift()
  }

  // return true if the queue is empty
  isEmpty(){
    return this.items.length === 0;
  }

  // returns the first item of the queue
  peek(){
    if(!this.isEmpty()){
      return this.items[0]
  }
    return null
  }

  // return the number of items in the queue
  size(){
    return this.items.length;
  }

  // prints the overall queue
  print() {
    console.log(this.items.toString())
  }

}


// function/class call section
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(23);
queue.enqueue(44);

console.log(queue.isEmpty());
queue.print();
console.log(queue.peek());
console.log(queue.size());


