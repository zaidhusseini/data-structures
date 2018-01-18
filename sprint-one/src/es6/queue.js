class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.index = 0;
  }

  enqueue(value) {
    this[this.length] = value;
    this.length++;
  }

  dequeue(){
    var temp = this[this.index];
    this.index++;
    return temp;
  }

  size(){
    return Math.max(0,this.length-this.index);
  }
}
