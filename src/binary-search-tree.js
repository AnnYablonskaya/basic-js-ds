const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addInside(this.tree, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInside(this.tree, data);

    function searchInside(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
      searchInside(node.left, data) : 
      searchInside(node.right, data);
    }
  }
  

  find(data) {
    return findInside(this.tree, data);

    function findInside(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
      findInside(node.left, data) : 
      findInside(node.right, data);
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data){
      if (node === null) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let minFromRight = node.right;
          while(minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.data = minFromRight.data;
          node.right = removeNode(node.right, minFromRight.data);
          return node;
        }
      }
    }
  }


  min() {
    if (!this.tree) {
      return;
    }
    let node = this.tree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.tree) {
      return;
    }
    let node = this.tree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
