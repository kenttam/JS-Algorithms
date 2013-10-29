var chapter5 = {
  insertBitsAtPosition: function(n, m, i, j){
    var length = j-i + 1;
    var mask = ~( 1 << (length - 1));
    if(i > 0){
      mask <<= 1;
      mask |= 1;
      mask <<= (i - 1);
    }
    var temp = n & mask;
    if(i > 0){
      m <<= 1;
      var zeroMask = ~1;
      m &= zeroMask;
      m <<= i - 1;
    }
    return temp | m;
  }
};

module.exports = chapter5;














