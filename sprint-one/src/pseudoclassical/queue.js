var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.index = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.length] = value;
  this.length++;

};

Queue.prototype.dequeue = function(){
  var temp = this[this.index];
  this.index++;
  return temp;
};

Queue.prototype.size = function(){
  return Math.max(0,this.length-this.index);
};


