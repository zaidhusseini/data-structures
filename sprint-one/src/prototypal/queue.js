var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.length = 0;
  obj.index = 0;
  obj. storage = {};

  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  var temp = this[this.index];
  this.index++;
  return temp;

};
  
queueMethods.size = function(){
  return Math.max(0,this.length-this.index);
};


