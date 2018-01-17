var Queue = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var temp;
  var index=0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    temp = storage[index];
    delete storage[index];
    index++;
    return temp;
  };

  someInstance.size = function() {
    return Math.max(0,size-index);
  };

  return someInstance;
};
