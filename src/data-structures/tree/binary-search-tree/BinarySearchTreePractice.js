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
  // we will pass in the root (parent) node and compare it to the newNode
  insertNode(node, newNode) {
    // if new node is less than parent then move it to the left
    if (newNode.data < node.data) {
      // if left node is null then insert it here
      if (node.left === null) {
        node.left = newNode;
      } else {
        // In computer programming, the term recursive describes a function or method that repeatedly calculates a smaller part of itself to arrive at the final result. It is similar to iteration, but instead of repeating a set of operations, a recursive function accomplishes repetition by referring to itself in its own definition. While the concept of recursive programming can be difficult to grasp initially, mastering it can be very useful. Recursion is one of the fundamental tools of computer science.

        // if left node is not null then recursively find the next
        // null left node to insert the newNode
        this.insertNode(node.left, newNode);
      }
    } else {
      // if data is more on the right then insert here
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right node is not null then recursively find the next
        // null right node to insert the newNode
        this.insertNode(node.right, newNode);
      }
    }
  }

  // remove(data)

  // helper functions
  // findMinNode();
  // getRootNode();
}
