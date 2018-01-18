var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(stackMethods);
  obj.length = 0;
  obj.storage = {};

  return obj;

};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;

};

stackMethods.pop = function(){
  this.length--;
  var temp = this.storage[this.length];
  return temp;
};

stackMethods.size = function(){
  return Math.max(0,this.length);
};
