var Stack = function() {

  var someInstance = {};
  someInstance['storage'] = {};
  someInstance['count'] = 0;
  
  _.extend(someInstance, stackMethods);

  return someInstance; 
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    if (this.count > 0) {
      var popped = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return popped;
    } else {
      return undefined;
    }
  },
  size: function() {
    return this.count;
  },
};


