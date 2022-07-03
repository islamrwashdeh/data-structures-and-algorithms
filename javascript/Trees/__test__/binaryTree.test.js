'use strict';

const { BT, BST } = require('../binaryTree');
const Node = require('../node');
let tree = null;
let binarySearchTree = null;


describe('Binary Tree', () => {

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BT(one);
  });

  it('constructor', () => {
    expect(tree.root.value).toEqual(1);
  });

  it('preOrder', () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });

  it('inOrder', () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });

  it('postOrder', () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });

});
describe('testing Binary search tree', () => {
  beforeAll(() => {

    binarySearchTree = new BST();
    binarySearchTree.add(100);
    binarySearchTree.add(70);
    binarySearchTree.add(130);
    binarySearchTree.add(60);
    binarySearchTree.add(80);
    binarySearchTree.add(120);
    binarySearchTree.add(140);


  }
  );
  it('testing the root value', () => {
    expect(binarySearchTree.root.value).toEqual(100);
  });
  it('testing the preOrder method', () => {
    let arr = [100, 70, 60, 80, 130, 120, 140];
    expect(binarySearchTree.preOrder()).toEqual(arr);

  });
  it('testing the inOrder method', () => {
    let arr = [60, 70, 80, 100, 120, 130, 140];
    expect(binarySearchTree.inOrder()).toEqual(arr);
  });
  it('testing the postOrder method', () => {
    let arr = [60, 80, 70, 120, 140, 130, 100];
    expect(binarySearchTree.postOrder()).toEqual(arr);
  });
  it('testing the contains method', () => {
    expect(binarySearchTree.contains(130)).toBe(true);
    expect(binarySearchTree.contains(65)).toBe(false);
  });
});