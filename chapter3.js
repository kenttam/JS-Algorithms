Chapter2 = require("./chapter2")
var chapter3 = {
  ThreeStack: function(){
    var stack = {
      data: [],
      indexes: {
        1 : 0,
        2 : 100,
        3 : 200
      }
    };
    stack.push = function(index, value){
      this.data[this.indexes[index]] = value; 
      this.indexes[index] ++;
    }; 
    stack.pop = function(index){
      var result = this.data[this.indexes[index ] - 1];
      this.indexes[index] --;
      return result;
    }
    return stack;
  },
  StackMin: function(){
    var stack = {
      min: null,
      data: []
    };
    stack.push = function(value){
      if(stack.min == null || value < stack.min.data){
        var min = new Chapter2.Node(value); 
        min.next = stack.min;
        stack.min = min;
      }
      this.data.push(value);
    };
    stack.pop = function(){
      var result = this.data.pop();
      if(stack.min.data == result){
        stack.min = stack.min.next;
      }
      return result;
    };
    stack.minimum = function(){
      return this.min.data;
    }
    return stack;
  },
  SetOfStacks: function(){
    var stack = {
      set: [],
      currentIndex: 0
    };
    stack.push = function(value){
      if(this.set[this.currentIndex] !== undefined && this.set[this.currentIndex].length >= 2){
        this.currentIndex ++;
      }
      if(this.set[this.currentIndex] === undefined){
        this.set[this.currentIndex] = [];
      }
      this.set[this.currentIndex].push(value); 
    };
    stack.pop = function(value){
      if(this.set[this.currentIndex].length == 0){
        this.currentIndex --;
      }
      if(this.currentIndex < 0){
        return;
      }
      else{
        return this.set[this.currentIndex].pop();
      }
    }
    stack.popAt = function(index){
      if(index > this.currentIndex){
        return;
      }
      var result = this.set[index].pop();
      while(index < this.currentIndex){
        this.set[index].push(decrementIndex(this.set[index + 1]));
        index ++;
      }
      if(this.set[this.currentIndex].length === 0){
        this.currentIndex --;
      }
    }
    function decrementIndex(arr){
      var x = 0;
      var rollover = arr[0];
      for(;x < arr.length; x++){
        if(arr[x+1] !== undefined)
          arr[x] = arr[x+1];
        else
          arr.pop();
      }
      return rollover;
    }
    return stack;
  }
};

module.exports = chapter3;
