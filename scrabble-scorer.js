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
let lowerCaseWord = word.toLowerCase();
let lettersArray = lowerCaseWord.split('');
let wordScore = 0;
for(i=0;i< lettersArray.length;i++){
   wordScore = wordScore + 1;
}
return wordScore;
}

function vowelBonusScorer(word){
const vowels = ('A','E','I,','O','U')
const wordScore = 0;
for(let i = 0;i<word.length;i++){
   if (vowels.includes(word[i].toUpperCase())) {
      wordScore += 3;
    } else {
      wordScore += 1;
    }
  }
  return wordScore;
}

function scrabbleScorer(word){
let lowerCaseWord = word.length();
let lettersArray = lowerCaseWord.split(',');
const points = oldScrabbleScorer(lettersArray);

return points;
}


const scoringAlgorithms = [
   {
   name: 'simpleScorer',
   description: 'Each letter is worth one point',
   scoringFunction: simpleScorer
   },
   {
      name: 'Bonous Vowels',
      description: 'Vowels are 3 points, Constinents are 1 point',
      scoringFunction: vowelBonusScorer
   },
   {
      name: 'Scrabble' ,
      descritption: 'Scrabble the Traditional scoring algorythem',
      scoringFunction: scrabbleScorer
   }
];

function scorerPrompt() {
   console.log("Which Scoreing Algorythem would you like to use?\n:");
   for(i=0;i<scoringAlgorithms.length;i++){
      console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
   }
   const selectedAlgorithmIndex = input.question('Enter 0, 1, or 2: ');

  return scoringAlgorithms[selectedAlgorithmIndex];
}


function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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
