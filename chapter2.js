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
  }
};

module.exports = chapter2;
