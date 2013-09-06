var chapter2 = {
  Node: function(data){
    this.next = null;
    this.data = data;

    this.appendToTail = function(d){
      var end = new chapter2.Node(d);
      var that = this;
      while(that.next != null){
        that = that.next;
      }
      that.next = end;
    }
  },
  removeDuplicates: function(node){
    var cache = {},
        current = node;
    cache[current.data] = true;
    while(current.next != null) 
    {
      if(cache[current.next.data] != null){
        current.next = current.next.next;
      }
      else{
        cache[current.next.data] = true;
      }
      current = current.next;
    }
  },
  removeDupesWithoutBuffer: function(node){
    while(node.next != null){
      var currentData = node.data,
          tempNode = node;
      while(tempNode.next != null){
        if(tempNode.next.data == currentData){
          tempNode.next = tempNode.next.next;
        }
        tempNode = tempNode.next;
      }
      node = node.next;
    }
  },
  findKthToLast: function(node, k){
    var runner = node;
    while(k-1 > 0){
      runner = runner.next;
      k--;
    }
    while(runner.next != null){
      runner = runner.next;
      node = node.next;
    }
    return node;
  },
  Fibonacci: function(n, m){
    var fibArray = [0, 1];
    var powerArray = [1];
    var x = fibArray.length;
    var y, i, tempString = "";
    for(x = fibArray.length - 1; fibArray[x] < m; x++){
      fibArray.push(fibArray[x] + fibArray[x-1]);  
    }
    for(y = powerArray.length - 1; powerArray[y] < m; y++){
      powerArray.push(powerArray[y] * 2);
    }
    for(i = 0; i < fibArray.length; i++){
      if(fibArray[i] > n && fibArray[i] < m){
        if(powerArray.indexOf(fibArray[i]) > -1){
          tempString += "moo ";
        }
        else{
          tempString += fibArray[i] + " " ;
        }
      } 
    }
    return tempString.toString();
  },
  deleteNode: function(node, needle){
    var runner = node.next;
    while(runner != null){
      if(runner.data === needle){
        node.next = runner.next; 
      }
      node = node.next;
      runner = runner.next;
    }
  }
};

module.exports = chapter2;
