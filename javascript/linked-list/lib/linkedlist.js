

'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

      //insert 
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }



// include  

include(value){
  if(this.head!=null){
      let includehead = this.head;
      while(includehead!=null){
    
    if(includehead.value!=value){

    includehead =includehead.next;
}
else return true;
}

}
else return false;
}


//////////////class 6/////////
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length++;
    }
  }

  insertBefore(perValue, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.next.value == perValue) {
        node.next = currentNode.next;
        currentNode.next = node;
        return null;
      }
    }
  }

  insertAfter(perValue, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value == perValue) {
        node.next = currentNode.next;
        currentNode.next = node;
        return null;
      }
    }
  }
///////////// kth from end////////
 
kthFromEnd(k) {
  let current = this.head;
  let length = 0;
  while (current) {
    current = current.next;
    length++;
  }
  if (k < 0 || k > length) {
    return "exception";
  } else {
    length = length - 1 - k;
    current = this.head;
    while (length > 0) {
      current = current.next;
      length--;
    }
    return current.value;
  }
}
       //////////ziped list /////////////
       

 zipLists(ll1, ll2) {
    let curr1 = ll1.head;
    let curr2 = ll2.head;
    let point = curr1;
    let x = 0;
    while (curr1.next !== null && curr2.next !== null) {
      if (x % 2 === 0) {
        point.next = curr2;
        curr2 = curr2.next;
      } else {
        point.next = curr1;
        curr1 = curr1.next;
      }
      point = point.next;
      x++;
      if (!curr1) {
        point.next = curr1;
      }
      if (!curr2) {
        point.next = curr2;
      }
      return ll1;
    }
  }
}

module.exports = LinkedList;


















