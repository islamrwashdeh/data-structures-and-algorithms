

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
          


         
          


  


  

  
}
module.exports = LinkedList;


















