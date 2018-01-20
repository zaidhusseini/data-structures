var BinarySearchTree = function(value) {
  var bsTree = {};
  bsTree.value = value;
  bsTree.left = null;
  bsTree.right = null;
  
  bsTree.insert = function insert(value) {

    if (value > bsTree.value) {
      // right branch base case
      if (bsTree.right === null) {
        bsTree.right = BinarySearchTree(value);
        return;
      } else {
      // right branch recursive case
        bsTree.right.insert(value);
      }
    } else if (value < bsTree.value) {
      // left branch base case 
      if (bsTree.left === null) {
        bsTree.left = BinarySearchTree(value);
        return;
      } else {
      // left branch recursive case
        bsTree.left.insert(value);
      }
    }
    
  };
 
  bsTree.contains = function contains(value) {
    
    var found = false;
    if (value === bsTree.value) {
      found = true;
    } else if (value < bsTree.value && bsTree.left !== null) {
      found = bsTree.left.contains(value);
    } else if (value > bsTree.value && bsTree.right !== null) {
      found = bsTree.right.contains(value);
    }
    return found;

  };
  
  bsTree.depthFirstLog = function depthFirstLog(func) {
    func(bsTree.value);
    if (bsTree.left !== null) {
      bsTree.left.depthFirstLog(func);
    } 
    if (bsTree.right !== null) {
      bsTree.right.depthFirstLog(func);
    }
  };

  bsTree.size = function size () {
    var count = 0;
    bsTree.depthFirstLog(function() {
      count++;
    });
    return count;
  };

  return bsTree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 * .insert: O(log n) if balanced. if unbalanced O(n)
 * .contains: O(log n) if balanced, if unbalanced O(n)
 * .depthFirstLog: O(n)
 */
