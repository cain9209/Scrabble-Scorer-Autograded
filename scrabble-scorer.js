// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

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

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   const userInput = input.question("Enter a word to score!:");
   const score = oldScrabbleScorer(userInput);
   console.log(`Your word:${userInput}\n${score}`);
}

function simpleScorer(word){
let lettersArray = [];
let capitolWord = word.toUpperCase();
lettersArray.push = (capitolWord.split(''));
let score = 0;
for(i=0;i< lettersArray.length;i++){
   score = score + 1;
}
return score;
}


function vowelBonusScorer(word){
let lettersArray = [];
let capitolWord = word.toUpperCase();
lettersArray.push = capitolWord.split('');
let wordScore = 0;
for(i = 0;i<word.length;i++){
if (['a','e','i','o','u'].includes(lettersArray[i])) {
   wordScore += 3;
} else {
   wordScore++;
    }
  }
  return wordScore;
}


function scrabbleScorer(word){
let lettersArray = [];
let capitolWord = word.toUpperCase();
lettersArray.push = capitolWord.split('');
const points = oldScrabbleScorer(lettersArray);

return points;
}

const scoringAlgorithms = [
   {
   "name": 'Simple Scorer',
   "description": '0 - Simple: One point per character',
   "scoringFunction": [simpleScorer],
   },
   {
      "name": 'Bonous Vowels',
      "description": '1 - Vowel Bonus: Vowels are worth 3 points',
      "scoringFunction": [vowelBonusScorer],
   },
   {
      "name": 'Scrabble-Scorer' ,
      "description": '2 - Scrabble: Uses scrabble point system',
      "scoringFunction": [oldScrabbleScorer],
   }
];

function scorerPrompt() {
   console.log("Which Scoreing Algorythem would you like to use?:\n");
   for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${scoringAlgorithms[i].description}`);
   }
   const userSelection = input.question("Enter 0, 1, or 2: "); // need to push input to array//
   const selectionArray = [];
   selectionArray.push(userSelection);
   console.log(`You have selected ${selectionArray}`);

   return scoringAlgorithms[userSelection]; // Return the selected scoring algorithm
}

let transform = function(oldPointStructure) {
 const newPointStructure = {};
 for (key in oldPointStructure){
   keyArray = oldPointStructure[key];
   for(i=0; i<keyArray.length;i++) {
      newPointStructure[keyArray[i].toUpperCase()] = Number(key);
   }
 }
 return newPointStructure;
}
let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
