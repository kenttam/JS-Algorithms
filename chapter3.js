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
  }
};

module.exports = chapter3;
