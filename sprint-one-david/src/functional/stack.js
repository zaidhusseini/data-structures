var Stack = function() {
  var someInstance = {};

  var storage = {};
  var count = 0;

  someInstance.push = function(value) {
    count++;
    var key = count;
    storage[key] = value;
  };

  someInstance.pop = function() {
    if (count > 0) {
      var result = storage[count];
      delete storage[count];
      count--;
      return result;
    } else {
      return storage[count];
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
