class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  // insertChild(value) {}
  //
  // // left, root, right
  inOrderTraversal(func = console.log) {
    if (this.left !== null) {
      this.left.inOrderTraversal(func);
    }

    func(this.value);

    if (this.right !== null) {
      this.right.inOrderTraversal(func);
    }
  }

  // eslint-disable-next-line no-unused-vars
  inOrderTraversalIterative(func = console.log) {
    // todo
  }

  //
  // // root, left, right
  preOrderTraversal(func = console.log) {
    func(this.value);

    if (this.left !== null) {
      this.left.preOrderTraversal(func);
    }

    if (this.right !== null) {
      this.right.preOrderTraversal(func);
    }
  }

  // eslint-disable-next-line no-unused-vars
  preOrderTraversalIterative(func = console.log) {
    // todo
  }

  //
  // // left, right, root
  postOrderTraversal(func = console.log) {
    if (this.left !== null) {
      this.left.postOrderTraversal(func);
    }

    if (this.right !== null) {
      this.right.postOrderTraversal(func);
    }

    func(this.value);
  }

  // eslint-disable-next-line no-unused-vars
  postOrderTraversalIterative(func = console.log) {
    // todo
  }

  levelOrderTraversal(func = console.log) {
    let level = [this];

    while (level.length > 0) {
      func(level.map((x) => x.value));

      const newLevel = [];

      for (const node of level) {
        if (node.left !== null) {
          newLevel.push(node.left);
        }

        if (node.right !== null) {
          newLevel.push(node.right);
        }
      }

      level = newLevel;
    }
  }

  getMaxDepthTopDown() {
    let maxDepth = 0;

    const iter = (node, depth = 1) => {
      if (node === null) {
        return;
      }

      if (node.left === null && node.right === null) {
        maxDepth = Math.max(maxDepth, depth);
      }

      iter(node.left, depth + 1);
      iter(node.right, depth + 1);
    };

    iter(this);

    return maxDepth;
  }

  getMaxDepthBottomUp() {
    const leftDepth = this.left ? this.left.getMaxDepthBottomUp() : 0;
    const rightDepth = this.right ? this.right.getMaxDepthBottomUp() : 0;

    return Math.max(leftDepth, rightDepth) + 1;
  }

  static fromArray(array = []) {
    if (array.length === 0 || array[0] === null) {
      return null;
    }

    let i = 1;
    const tree = new BinaryTree(array[0]);

    // todo best way to implement queue?
    const queue = [tree];

    while (i < array.length && queue.length > 0) {
      const item = queue.shift();

      const left = array[i++];
      const right = array[i++];

      if (left) {
        item.left = new BinaryTree(left);
        queue.push(item.left);
      }

      if (right) {
        item.right = new BinaryTree(right);
        queue.push(item.right);
      }
    }

    return tree;
  }
}

export default BinaryTree;
