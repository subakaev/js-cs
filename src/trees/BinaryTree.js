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
