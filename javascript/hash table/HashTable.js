'use strict';


const LinkedList = require('./linkedList');


class HashTable {
  constructor(size){
    this.size = size;
    this.buckets =new Array(size);
    this.length = 0;
  }
  hash(key){
    return key.toString().split(' ').reduce((acc, curr) => {
      return acc + curr.charCodeAt();
    },0)*599 % this.size;
  }
  set(key, val){
    const index = this.hash(key);
    if(!this.buckets[index]){
      this.buckets[index] = new LinkedList();
    }
    let entryVal = {[key]:val};
    this.buckets[index].append(entryVal);
    this.length++;
  }
  get(key){
    const index = this.hash(key);
    if(!this.buckets[index]){
      return null;
    }
    let current = this.buckets[index].head;
    while(current){
      if(current.value[key]){
        return current.value[key];
      }
      current = current.next;
    }
    return null;
  }
  keys(){
    const keys = [];
    this.buckets.forEach(bucket => {
      let current = bucket.head;
      while(current){
        for(let key in current.value){
          keys.push(key);
        }
        current = current.next;
      }
    });
    return keys;
  }
  contains(key){
    const index = this.hash(key);
    if(!this.buckets[index]){
      return false;
    }
    let current = this.buckets[index].head;
    while(current){
      if(current.value[key]){
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = HashTable;