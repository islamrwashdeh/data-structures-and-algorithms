'use strict';

const LinkedList = require('../lib/linkedlist');


  
// ////test  insert np
// describe('insert to the beginning of linklst ', () => {
  
//   it('test case 1 add to empty Linklst', () => {
//     const ll = new LinkedList();
//     ll.insert('a');
//     expect(ll.head.value).toBe('a');
//     expect(ll.head.next).toBeNull();
//   })
// });



describe('Linked List', () => {
 
  it('test insert before ',()=>{
    const link = new LinkedList();
    link.append('A');
    link.append('B');
    link.append('C');
  
    link.insertBefore('C','D');
    console.log(link.toString());
    expect(link.head.value).toBe('A');
    expect(link.head.next.value).toBe('B');
    expect(link.head.next.next.value).toBe('D');
    expect(link.head.next.next.next.value).toBe('C');
    expect(link.head.next.next.next.next).toBe(null);
  });  


  it('test insert after',()=>{
    const link = new LinkedList();
    link.append('A');
    link.append('B');
    link.append('C');
  
    link.insertAfter('B','E');
    console.log(link.toString());
    expect(link.head.value).toBe('A');
 
    expect(link.head.next.value).toBe('B');
    expect(link.head.next.next.value).toBe('E');
    expect(link.head.next.next.next.value).toBe('C');
    expect(link.head.next.next.next.next).toBe(null);
  });
});



////////// kthFromEnd//////////

describe('test kthFromEnd', () => {
  it('test kthFromEnd cases', () => {
    const ll = new LinkedList();
    ll.insert(0);
    ll.insert(2);
    ll.insert(6);
    expect(ll.kthFromEnd(6)).toEqual('Exception');
    expect(ll.kthFromEnd(2)).toEqual(3);
    expect(ll.kthFromEnd(0)).toEqual(2);
   
  });
});


