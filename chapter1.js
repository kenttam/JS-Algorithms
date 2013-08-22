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
  },
  //Given two strings, write a method to decide if one is permutation of the other
  IsPermutation: function(a, b){
    //an N x N algorithm
    if(a.length !== b.length){
      return false;
    }
    var aArray = a.split(""),
        bArray = b.split(""),
        found = false,
        x, y, currentChar;
    for(x = 0; x < aArray.length; x++){
      currentChar = aArray[x];
      found = false;
      for(y = 0; y < bArray.length; y++){
        if(currentChar === bArray[y]){
          bArray.splice(y, 1);
          found = true;
          break; 
        }
      } 
      if(!found){
        return false;
      }
      else if (bArray.length === 0){
        return true;
      }
    }
  },

  IsPermutation2: function(a,b){
    //assuming the sort function is n log n, this function will perform better than the first
    if(a.length !== b.length){
      return false;
    }
    var aArray = a.split("").sort(),
        bArray = b.split("").sort(),
        x;
    for(x = 0; x < aArray.length; x++){
      if(aArray[x] !== bArray[x]){
        return false;
      } 
    }
    return true;
  },
  ReplaceSpace: function(input){
    //of course I can just call replace, but i'm going to use a character array like I'm working in C
    var stringArray = input.split(""),
        numOfSpaces = 0,
        x, y, newLength;
    for(x  = 0; x < stringArray.length; x++){
      if(stringArray[x] === " "){
        numOfSpaces++;
      }    
    }
    newLength = stringArray.length + 2 * numOfSpaces;
    x = newLength;
    y = stringArray.length;
    for(; y > 0; y--){
      if(stringArray[y] === " "){
        stringArray[x] = "0";
        stringArray[x-1] = "2";
        stringArray[x-2] = "%";
        x-=3;
      }
      else{
        stringArray[x] = stringArray[y];
        x-=1;
      }
    }
    return stringArray.join("");
  }
};

module.exports = Chapter1;
