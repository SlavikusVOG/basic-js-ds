const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		// this.treeRoot = new Node();
		this.treeRoot = null;
	}

  root() {
	  return this.treeRoot;
  }

  add(data) {
	  if(!this.treeRoot) {
		// this.treeRoot.data = data;
		this.treeRoot = new Node(data);
		return;
	  }
	  let node = this.treeRoot;
	  let newNode;
	  while(!newNode) {
		  if (node.data < data) {
			  if(node.right) {
				  node = node.right;
			  } 
			  else {
				  node.right = new Node(data)
				  newNode = node.right;
				  continue;
			  }
		  }
		  else {
			  if(node.left) {
				  node = node.left;
			  }
			  else {
				  node.left= new Node(data)
				  newNode = node.left;
				  continue;
			  }
		  }
	  }
  }

  has(data) {
	  let node = this.treeRoot;
	  let found = false;
	  while(node) {
	  	if (node.data === data) {
			return true;
	  	}
		else if (node.data > data) {
			node = node.left;
		}
		else {
			node = node.right;
		}
	  }
	  return found;
  }

  find(data) {
	  let node = this.treeRoot;
	  let found = null;
	  while(node) {
		  if (node.data === data) {
			  return node;
		  }
		  else if (node.data > data) {
			  node = node.left;
		  }
		  else if (node.data < data) {
			  node = node.right;
		  }
	  }
	  return found;
  }

  remove(data) {
	  let node = this.treeRoot;
	  let prev;
	  let nodeBranch;
	  while(node) {
		if (node.data === data) {
			if (prev) {
				prev[nodeBranch] = null;
			}
			else {
				this.treeRoot = new Node();
			}
		}
		else if (node.data > data) {
			prev = node;
			nodeBranch = "left";
			node = node.left;
		}
		else if (node.data < data) {
			prev = node;
			nodeBranch = "right"
			node = node.right;
		}
	}
  }

  min() {
	  let node = this.treeRoot;
	  while(node.left) {
		  node = node.left;
	  }
	  return node.data;
  }

  max() {
	  let node = this.treeRoot;
	  while(node.right) {
		  node = node.right;
	  }
	  return node.data;
  }
}

module.exports = {
  BinarySearchTree
};