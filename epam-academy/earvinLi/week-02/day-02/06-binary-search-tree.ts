// Idea from:
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
// and
// https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm
// and
// http://www.algolist.net/Data_structures/Binary_search_tree/Removal

interface Tree {
  // empty(): boolean;
  add(value: number): void;
  remove(value: number): void;
  search(value: number): boolean;
}

class BinaryTreeNode {
  left;
  right;
  value: number;


  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree implements Tree {
  root;

  constructor() {
    this.root = null;
  }

  remove(value: number) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, key) {
    if (node === null) {
      throw 'Empty tree. Nothing to remove.';
    } else if (key < node.value) {
      return node.left = this.removeNode(node.left, key);
    } else if (key > node.value) {
      return node.right = this.removeNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      }

      if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      }


    }
  }

  search(value: number) {
    let currentBinaryTreeNode = this.root;

    while(true) {
      if (currentBinaryTreeNode.value === value) return true;

      if (currentBinaryTreeNode.value > value) {
        currentBinaryTreeNode = currentBinaryTreeNode.left;
      } else {
        currentBinaryTreeNode = currentBinaryTreeNode.right;
      }

      if (currentBinaryTreeNode === null) return false;
    }
  }

  add(value: number) {
    const binaryTreeNodeToAdd = new BinaryTreeNode(value);

    if (this.root === null) {
      this.root = binaryTreeNodeToAdd;
    } else {
      let currentBinaryTreeNode = this.root;
      let parentBinaryTreeNode = null;

      while (true) {
        parentBinaryTreeNode = currentBinaryTreeNode;

        if (value < parentBinaryTreeNode.value) {
          // Keep going
          currentBinaryTreeNode = currentBinaryTreeNode.left;

          if (currentBinaryTreeNode === null) {
            return parentBinaryTreeNode.left = binaryTreeNodeToAdd;
          }
        } else {
          currentBinaryTreeNode = currentBinaryTreeNode.right;

          if (currentBinaryTreeNode === null) {
            return parentBinaryTreeNode.right = binaryTreeNodeToAdd;
          }
        }
      }
    }
  }
}

const binaryTreeOne = new BinaryTree();
binaryTreeOne.add(27);
binaryTreeOne.add(14);
binaryTreeOne.add(19);
console.log(binaryTreeOne);
console.log(binaryTreeOne.search(19));
console.log(binaryTreeOne.search(42));
