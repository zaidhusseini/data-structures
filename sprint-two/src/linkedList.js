var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;
  // test comment

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    list.size++;
  };

  list.removeHead = function() {
    var tempHead = list.head;
    list.head = list.head.next;
    list.size--;
    return tempHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } 
    return false;  
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

addToTail: O(1)
removeHead: O(1)
contains: O(n)
Node Instantiation: O(1)
 */
