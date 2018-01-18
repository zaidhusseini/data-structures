var Queue = function() {

  var someInstance = Object.create(queueMethods);
  someInstance['storage'] = {};
  someInstance['count'] = 0;

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
    }
    var dequeued = this.storage[1];
    this.count--;
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    return dequeued;
  },
  size: function() {
    return this.count;
  }
};


