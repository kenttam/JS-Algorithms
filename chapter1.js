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
  },
  StringCompression: function(input){
    var tempString = "",
        x, currentChar, y, repeatedCount;
    for(x = 0; x < input.length; x++){
      currentChar = input[x]; 
      tempString += currentChar;
      y = x;
      repeatedCount = 0;
      while(input[y] === currentChar){
        repeatedCount ++;
        y ++; 
      }
      if(repeatedCount !== 0){
        tempString += repeatedCount;
        x += (repeatedCount -1);
      }
    }
    if(tempString.length < input.length){
      return tempString;
    }
    else{
      return input;
    }
  },
  //Given an image represented by an NxN matrix, write an algorithm to rotate the image by 90 degrees. in place
  RotateMatrix: function(matrix){
    var x = 0,
        y = 0,
        currentXLimit = matrix.length - 1,
        yLimit = Math.floor(matrix.length/2);
    for(y = 0; y < yLimit; y++){
      for(x = 0; x < currentXLimit; x++){
        matrix = this.SwapTheFourCoordinates(matrix, x, y); 
      }
      currentXLimit -= 2;
    }
    return matrix;
  },
  //helper function for rotating the matrix
  SwapTheFourCoordinates: function(matrix, x, y){
    var originalX = x,
        originalY = y,
        length = matrix.length,
        savedValue, nextIterationValue, tempX;
    nextIterationValue = matrix[x][y];
    do {
      savedValue = matrix[y][length-x-1];
      matrix[y][length-x-1] = nextIterationValue;
      nextIterationValue = savedValue;
      tempX = x;
      x = y;
      y = length - tempX - 1;
    } while(!(x == originalX && y == originalY))
    return matrix;
  },
  //Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
  ZeroOut: function(matrix){
    var height = matrix.length,
        width = matrix[0].length,
        xZeroes = [],
        yZeroes = [],
        x, y;
    for(x=0; x< width; x++){
      for(y=0; y< height; y++){
        if(matrix[x][y] == 0){
          xZeroes.push(x);
          yZeroes.push(y);
        }
      }
    }
    for(x = 0; x < xZeroes.length; x++){
      for(y = 0; y < height; y++){
        matrix[xZeroes[x]][y] = 0;
      }    
    }
    for(y = 0; y < yZeroes.length; y++){
      for(x = 0; x < width; x++){
        matrix[x][yZeroes[y]] = 0;
      }    
    }
    return matrix;
  }
};

module.exports = Chapter1;
