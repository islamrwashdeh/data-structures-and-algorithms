'use strict';


const Pqueue = require('../stack-queue-pseudo/stack-queue-pseudo');

describe('enqueue pseudoQueue', () => {

  it('add to queue', () => {
    const pseudoqueue = new Pqueue ();
    pseudoqueue.enqueue(3);
    pseudoqueue.enqueue(2);
    pseudoqueue.enqueue(1);
    expect(pseudoqueue.stack1.toString()).toEqual('{ 3 } ->{ 2 } ->{ 1 } ->Null');
   
  });

  it('add to queue', () => {
    const pseudoqueue = new Pqueue();
    pseudoqueue.enqueue(3);
    pseudoqueue.enqueue(2);
    pseudoqueue.enqueue(1);

    pseudoqueue.dequeue();
    git  expect(pseudoqueue.stack1.toString()).toEqual("{ 2 } ->{ 1 } ->Null");
    pseudoqueue.dequeue();
    expect(pseudoqueue.stack1.toString()).toEqual("{ 1 } ->Null");

   
  });
});