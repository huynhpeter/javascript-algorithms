// create node class
// we define 3 properties: data, left and right
// value that is less than data is stored in left
// value that is more than data is stored in right
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// binary search tree class
class BinarySearchTree {
  constructor() {
    // set root to null
    this.root = null;
  }
  // functions to implement

  // helper method which creates a new node
  // to be inserted and calls insertNode
  insert(data) {
    let newNode = new Node(data);
    // if root is null then node will be added to the tree and be made the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      // find the correct position in the tree and add the node
      this.insertNode(this.root, newNode);
    }
  }

  // method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with with the data being passed in
  insertNode(data, newNode) {
    
  }

  // remove(data)

  // helper functions
  // findMinNode();
  // getRootNode();
}
