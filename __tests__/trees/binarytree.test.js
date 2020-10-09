import BinaryTree from "../../src/trees/BinaryTree";

describe("BinaryTree.fromArray tests", () => {
  test("should return null for empty array", () => {
    expect(BinaryTree.fromArray()).toBe(null);
    expect(BinaryTree.fromArray([])).toBe(null);
  });

  test("should return tree with only one node", () => {
    expect(BinaryTree.fromArray([1])).toMatchObject(new BinaryTree(1));
  });

  test("should return valid tree", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const expected = new BinaryTree(
      1,
      new BinaryTree(2, new BinaryTree(4), new BinaryTree(5)),
      new BinaryTree(3, new BinaryTree(6))
    );

    expect(BinaryTree.fromArray(inputArray)).toMatchObject(expected);
  });

  test("should return valid tree only with left", () => {
    const inputArray = [1, 2, null, 3];
    const expected = new BinaryTree(1, new BinaryTree(2, new BinaryTree(3)));

    expect(BinaryTree.fromArray(inputArray)).toMatchObject(expected);
  });

  test("should return valid tree only with right", () => {
    const inputArray = [1, null, 2, null, 3];
    const expected = new BinaryTree(
      1,
      null,
      new BinaryTree(2, null, new BinaryTree(3))
    );

    expect(BinaryTree.fromArray(inputArray)).toMatchObject(expected);
  });
});
