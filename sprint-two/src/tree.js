var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null; //create a ref to parent tree
  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var babyTree = Tree(value);
  babyTree.parent = this;
  this.children.push(babyTree);
};

treeMethods.contains = function(target) {
  var treeHasTarget = false;

  if (this.value === target){
    treeHasTarget = true; 
  }

  for (var i=0; i<this.children.length; i++){
    treeHasTarget = this.children[i].contains(target);
    if (treeHasTarget){
      return true;
    }
  }

  return treeHasTarget;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
