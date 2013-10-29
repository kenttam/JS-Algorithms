Chapter2 = require("./chapter2");
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
  },
  makeLinkedList: function(tree){
    var runner = tree;
    var temp = [tree];
    var result = [];
    var x = 0;
    while(temp.length > 0){
      queue = temp;
      temp = [];
      while(queue.length > 0){
        var current = queue.pop();
        var runner = result[x];
        if(result[x] == null){
          result[x] = new Chapter2.Node(current.data);
        }
        else{
          while(runner.next != null){
            runner = runner.next;
          }
          runner.next = new Chapter2.Node(current.data);
        }
        if(current.left != null){
          temp.push(current.left);
        }
        if(current.right != null){
          temp.push(current.right);
        }
      }
      x++;
    }
    return result;
  },
  isBST: function(tree, min, max){
    min = min || -1000000;
    max = max || 1000000;
    if(tree == null){
      return true;
    }
    else{
      if(tree.data < min || tree.data > max){
        return false;
      }
      if(this.isBST(tree.left, min, tree.data) && this.isBST(tree.right, tree.data, max)){
        return true;
      }
      else{
        return false;
      }
   }
 },
 findSumPath: function(tree, value, path, level, results){
   if(tree == null){
    return;
   }
   results = results || []; 
   path = path || [];
   level = level || 0;
   path[level] = tree.data;
   var sum = 0;
   var temp = [];
   for(var x = level; x >= 0;  x--){
     sum += path[x];
     temp.push(path[x]);
     if(sum == value){
       results.push(temp.slice(0, temp.length));
     }
   }

   this.findSumPath(tree.left, value, path, level + 1, results);
   this.findSumPath(tree.right, value, path, level + 1, results);

   return results;
  }

};

module.exports = chapter4;














