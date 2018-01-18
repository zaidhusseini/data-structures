var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;

};

Stack.prototype.push = function(value){
  this[this.length]=value;
  this.length++;
}

Stack.prototype.pop = function(){
  this.length--;
  var temp = this[this.length];
  return temp;
}
Stack.prototype.size = function(){
  return Math.max(this.length,0);
}