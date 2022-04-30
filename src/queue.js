const { NotImplementedError, ListNode } = require('../extensions/index.js');

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
class Queue {
	constructor() {
		this.node = new ListNode();
	}
  getUnderlyingList() {
	  return this.node;
  }

  enqueue(value) {
	let node = this.node;
	while (node.next) {
		node = node.next;
	}
	if(node.value) {
		node.next = new ListNode(value);
	}
	else {
		node.value = value;
	}
  }

  dequeue() {
	const node = this.node;
	if (this.node.next) {
		this.node = this.node.next;
	}
	else {
		this.node = new ListNode();
	}
	return node.value;
  }
}

module.exports = {
  Queue
};
