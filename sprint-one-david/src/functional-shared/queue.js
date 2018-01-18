var Queue = function() {

  var someInstance = {};
  someInstance['storage'] = {};
  someInstance['count'] = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  dequeue: function() {
    if (this.count === 0) {
      return undefined;
    } else {
      this.count = this.count - 1;
      var dequeued = this.storage[1];
      delete this.storage[1];
      for (var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      return dequeued;
    }
  },
  size: function() {
    return this.count;
  }
};
