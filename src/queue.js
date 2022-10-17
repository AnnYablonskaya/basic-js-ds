const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor(){
    this.top = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const list = new ListNode(value);
    if(!this.top){
      this.top = list;
      this.end = list;
    }else{
      this.end.next = list;
      this.end = list; 
    }
  }

  dequeue() {
    const el = this.top;
    this.top = this.top.next;
    return el.value;
  }
}

module.exports = {
  Queue
};
