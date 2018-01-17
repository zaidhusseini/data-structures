var Stack = function() {
  var someInstance = {};
  var size = 0;
  var temp;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size--;
    temp = storage[size];
    size = Math.max(0,size);
    delete storage[size];
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
