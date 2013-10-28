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
  },
  partitionList: function(list, value){
    var head = list,
        temp = null;
    while(list.next != null){
      if(list.next.data < value){
        temp = list.next;
        list.next = list.next.next;
        temp.next = head;
        head = temp;
      }
      else{
        list = list.next;
      }
    }
    return head;
  },
  LinkedListAddition: function(list1, list2){
    var carry = 0,
        currentValue = 0,
        sum = 0,
        result = null;
    while(list1 != null || list2 != null){
      sum = carry;
      if(list1 != null){
        sum += list1.data; 
      }
      if(list2 != null){
        sum += list2.data; 
      }
      currentValue = sum % 10;
      if(sum > 9){
        carry = 1;
      }
      else{
        carry = 0;
      }
      if(result == null){
        result = new chapter2.Node(currentValue);
      }
      else{
        result.appendToTail(currentValue); 
      }
      if(list1 != null)
        list1 = list1.next;
      if(list2 != null)
        list2 = list2.next;
    }
    return result;
  },
  FindBeginningOfLoop: function(node){
    var arr = [],
        head = node,
        slowRunner = node,
        fastRunner = node;
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
    while(fastRunner.data != slowRunner.data){
      slowRunner = slowRunner.next; 
      fastRunner = fastRunner.next.next;
    }
    //collision
    while(head.data != slowRunner.data){
      slowRunner = slowRunner.next;
      head = head.next;
    }
    return head;
  },
  IsPalindrome: function(node){
    var listValues = [];
    var runner = node;
    while(runner != null){
      listValues.push(runner.data);
      runner = runner.next;
    }
    while(listValues.length > 0){
      if(node.data !== listValues.pop()){
        return false;
      } 
      node = node.next;
    }
    return true;
  },
  reverse: function(node){
    var temp = node.next.next,
        fastRunner = node.next,
        runner = node; 
    while(fastRunner != null){
      fastRunner.next = runner; 
      runner = fastRunner;
      fastRunner = temp;
      if(temp != null)
        temp = temp.next;
    }
    return runner;
  }

};

module.exports = chapter2;
