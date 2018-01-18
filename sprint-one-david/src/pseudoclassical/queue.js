var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
  if (this.count === 0) {
    return undefined;
  }
  var dequeued = this.storage[1];
  this.count--;
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  return dequeued;
};

Queue.prototype.size = function() {
  return this.count;
};

