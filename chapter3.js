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
  }
};

module.exports = chapter3;
