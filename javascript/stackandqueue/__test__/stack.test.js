"use strict";

const Stack = require('../Stack');

describe("testing the Stack", () => {
  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
  });

  it("Can successfully peek the next item on the stack", () => {
    let newStack = new Stack();
    expect(newStack.peek()).toBeNull();
  });

  it("Can successfully push onto a stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.top.value).toEqual(2);
    expect(newStack.top.next.value).toEqual(1);
  });

  it("Can successfully pop off the stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    expect(newStack.pop()).toEqual(4);
    expect(newStack.pop()).toEqual(3);
    expect(newStack.pop()).toEqual(2);
  });

  it("Can successfully peek the next item on the stack", () => {
    const newStack = new Stack();
    const newStack2 = new Stack();
    newStack.push(3);
    newStack.push(4);

    expect(newStack.isEmpty()).toBeFalsy();
    expect(newStack2.isEmpty()).toBeTruthy();
  });
});