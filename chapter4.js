var chapter4 = {
  Tree: function(value){
    var tree = {
      data: value,
      left: null,
      right: null
    };
    return tree;
  },
  isBalanced: function(tree){
    if(tree.left === null && tree.right === null){
      return true;
    }
    if((tree.right === null && (tree.left.left != null || tree.left.right != null) )       || tree.left === null && (tree.right.right != null || tree.right.left != null)){
      return false;
    }
    return this.isBalanced(tree.left) && this.isBalanced(tree.right);
  },
  Node: function(value){
    var node = {
      data: value,
      connectedNodes: [],
      visited: false
    };
    return node;
  },
  connectNodes: function(a, b){
    a.connectedNodes.push(b);
    b.connectedNodes.push(a);
  },
  isConnected: function(a, b){
    var x = 0;    
    for(; x < a.connectedNodes.length; x++){
      if(!a.connectedNodes[x].visited){
        a.connectedNodes[x].visited = true;
        if(a.connectedNodes[x].data == b.data){
          return true;
        }
        else{
          if(this.isConnected(a.connectedNodes[x], b)){
            return true;
          }
        }
      }
    }
    return false;
  },
  makeBST: function(values){
    if(values.length == 0){
      return null;
    }
    else if(values.length == 1){
      return new this.Tree(values[0]);
    }
    else{
      var median = Math.floor(values.length / 2);
      var tree = new this.Tree(values[median]);
      tree.left = this.makeBST(values.slice(0, median));
      tree.right = this.makeBST(values.slice(median + 1, values.length));
      return tree;
    }
  }
};

module.exports = chapter4;