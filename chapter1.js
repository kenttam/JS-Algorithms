var Chapter1 = {
  //Implement an algorithm to determine if a string has all unique characters.
  StringHasAllUniqueCharacters : function(input){
    var stringArray = input.split(""),
        x,
        cacheObject = {};
    for(x = 0; x < stringArray.length; x++){
      if(cacheObject[stringArray[x]] === undefined){
        cacheObject[stringArray[x]] = "found";
      } 
      else{
        return false;
      }
    }
    return true;
  },
  //What if you cannot use additional data structure?
  UniqueCharactersNoHash: function(input){
    var stringArray = input.split(""),
        x, y;  
    for(x = 0; x < stringArray.length; x++){
      for(y = x+1; y < stringArray.length; y++){
        if(stringArray[x] === stringArray[y]){
          return false; 
        } 
      } 
    }
    return true;
  },
  //Implemnet a reverse function to reverse a string
  ReverseString: function(input){
    var stringArray = input.split(""),
        reversedArray = [],
        x;
    for(x = stringArray.length - 1; x >= 0; x--){ //could have used array.reverse() here but defeats the purpose.
      reversedArray.push(stringArray[x]); 
    }
    return reversedArray.join("");
  }
};

module.exports = Chapter1;
