class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(newNode, this.root);
      }
    }
  
    _insertNode(newNode, currentNode) {
      if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this._insertNode(newNode, currentNode.left);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this._insertNode(newNode, currentNode.right);
        }
      }
    }
  
    search(value) {
      return this._searchNode(value, this.root);
    }
  
    _searchNode(value, currentNode) {
      if (currentNode === null) {
        return false;
      } else if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        return this._searchNode(value, currentNode.left);
      } else {
        return this._searchNode(value, currentNode.right);
      }
    }
  
    remove(value) {
      this.root = this._removeNode(value, this.root);
    }
  
    _removeNode(value, currentNode) {
      if (currentNode === null) {
        return null;
      } else if (value === currentNode.value) {
        // Case 1: Node has no children
        if (currentNode.left === null && currentNode.right === null) {
          return null;
        }
        // Case 2: Node has one child
        if (currentNode.left === null) {
          return currentNode.right;
        }
        if (currentNode.right === null) {
          return currentNode.left;
        }
        // Case 3: Node has two children
        const tempNode = this._findMinNode(currentNode.right);
        currentNode.value = tempNode.value;
        currentNode.right = this._removeNode(tempNode.value, currentNode.right);
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode.left = this._removeNode(value, currentNode.left);
        return currentNode;
      } else {
        currentNode.right = this._removeNode(value, currentNode.right);
        return currentNode;
      }
    }
  
    _findMinNode(node) {
      if (node.left === null) {
        return node;
      } else {
        return this._findMinNode(node.left);
      }
    }
  }