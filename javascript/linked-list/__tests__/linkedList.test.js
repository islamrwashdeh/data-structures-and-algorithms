'use strict';

const LinkedList = require('../lib/linkedlist');

describe("link list", () => {
    test("create a linklist", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    test("append to linklist works", () => {
        let list = new LinkedList();
        list.append('one');
        expect(list.head.value).toEqual('one');
        list.append('two');
        expect(list.head.value).toEqual('one');
        list.append(4);
        list.append(5);
        list.append(7);
        list.append('8');
        list.append('9');
        list.append(10);
        expect(list.head.value).toEqual('one');
    })
})

////test  insert 
describe('insert to the beginning of linklst ', () => {
  
  it('test case 1 add to empty Linklst', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toBe('a');
    expect(ll.head.next).toBeNull();
  });
 
