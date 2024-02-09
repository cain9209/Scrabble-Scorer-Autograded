const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

transform = (oldPointStructure) => {
    const newPointStructure = {};
    for (letter in oldPointStructure){
      letterArray = oldPointStructure[letter];
      for(i=0; i<letterArray.length;i++) {
         newPointStructure[letterArray[i].toUpperCase()] = Number(letter);
      }
    }
    return newPointStructure;
   }
    let newPointStructure = transform(oldPointStructure);
    console.log(newPointStructure);