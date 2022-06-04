'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        // length 
        // tail
    }

    //append 
    append(value) {
        const newNode = new Node(value);
        //we need to check if the LL is empty or not 
        
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        else {
            // if the LL is not empty
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            return this;
        }
    }
          //insert 
          insert(value){
            const newNode = new Node(value);
              if(!this.head){
                this.head = newNode;
              } else{
                  newNode.next = this.head;
                  this.head = Node;
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

}


module.exports = LinkedList;