var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count ++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var result = storage[1];
      delete storage[1];
      count --;
      for (var key in storage) {
        var value = storage[key];
        key--;
        storage[key] = value;
      }
      return result;
    } else {
      return count;
    }
    
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
