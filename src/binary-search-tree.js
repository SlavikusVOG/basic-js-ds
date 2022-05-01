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
	const removeNode = (node, data) => {
		if (!node) {
			return null;
		}

		if (node.data > data) {
			node.left = removeNode(node.left, data);
			return node;
		}
		else if (node.data < data) {
			node.right = removeNode(node.right, data);
			return node;
		}
		else {
			if (!node.left && !node.right) {
			  return null;
			}
			if (!node.left) {
			  node = node.right;
			  return node;
			}
			if (!node.right) {
				node = node.left;
				return node;
			}
			let minFromRight = node.right;
			while (minFromRight.left) {
				minFromRight = minFromRight.left;
			}
			node.data = minFromRight.data;
			node.right = removeNode(node.right, minFromRight.data);
			return node;
		}
	}

	this.treeRoot = removeNode(this.treeRoot, data);
}

  min() {
	  let node = this.treeRoot;
	  const leafArray = [];
	  this.getAllLeafs(node, leafArray)
	return Math.min(...leafArray);
  }

  max() {
	let node = this.treeRoot;
	const leafArray = [];
	this.getAllLeafs(node, leafArray);
	return Math.max(...leafArray);
  }

  getAllLeafs(node, leafArray) {
	if(node.left) {
		this.getAllLeafs(node.left, leafArray);
	}
	if(node.right) {
		this.getAllLeafs(node.right,leafArray);
	}
	leafArray.push(node.data);
  }
}

module.exports = {
  BinarySearchTree
};