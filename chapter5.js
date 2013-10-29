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
  },
  toBinary: function(decimal){
    var multiplier = 1/2;
    var exponent = 1;
    var string = "0.";
    var sum = 0;
    while(exponent < 32){
      if((sum + Math.pow(multiplier, exponent)) <= decimal){
        sum += Math.pow(multiplier, exponent);
        string += "1";
      }
      else{
        string += "0";
      }
      if(sum == decimal){
        return string;
      }
      exponent++;
    }
    return false;
  },
  getPreviousNumber: function(number){
    var oneMask = 1;
    var numTrailingOne = 0;
    var temp = number;
    var zeroes = 0;
    while((oneMask & temp) == 1){
      numTrailingOne ++;
      temp >>= 1;
    }
    while((oneMask & temp) == 0){
      zeroes++;
      temp >>= 1;
    }
    var p = numTrailingOne + zeroes;
    var mask = ~(1 << (p));
    number &= mask;
    var submask = (~0) << (p);
    number &= submask;
    var trailingOnes = ~((~0) << (numTrailingOne + 1)) << (numTrailingOne + 1);
    return number | trailingOnes;
  }
};

module.exports = chapter5;














