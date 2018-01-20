

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Use our objects this._storage and .set(index,value) 
 
  if (this._storage.get(index) === undefined){
    this._storage.set(index,[[k,v]]);
  } else {
    var tupleArray = this._storage.get(index);
    tupleArray.push([k,v]);
    this._storage.set(index,tupleArray);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(index) || [];
  var value;
  tupleArray.forEach(function(tuple){
    if (tuple[0] === k) {
      value = tuple[1];
    }
  });
  
  return value;
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(index) || [];
  var indexToRemove;  
  
  tupleArray.forEach(function(tuple,i){
    if(tuple[0] === k){
      indexToRemove = i;
    }
  });  

  tupleArray.splice(indexToRemove,1);
  this._storage.set(index,tupleArray);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * .insert: O(1)
 * .retrieve: O(1) **With good hash function, linear for high collision hash function implementation** 
 * .remove: O(1) **same rationale as above** 
 */


