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
   let userInput = input.question("Enter a word to score!:");
   return userInput;

};

  let simpleScorer = (word) => {
   let score = 0
   word = word.toLowerCase();
   for (let i = 0; i < word.length; i++) { 
      score += 1;
   }
   return score;
};

   let vowelBonusScorer = (word) => {
   const vowels = ["a", "e", "i", "o", "u"];
   let score = 0;
   word = word.toLowerCase();
   for (let i = 0; i < word.length; i++) {
      score += vowels.includes(word[i]) ? 3 : 1;
   }
   return score;    
 };
 let scrabbleScorer = word => {
   const newPointStructure = transform(oldPointStructure);
 
   return word
     .toUpperCase()
     .split('')
     .map(letter => newPointStructure[letter.toLowerCase()])
     .reduce((a, b) => a + b);
 };
 
const scoringAlgorithms = [
   {
      name: "simpleScorer",
      description: "Each letter is worth 1 point",
      scorerFunction: simpleScorer
    },
    {
      name: "Vowel Bonus",
      description: "Vowel Bonus: Vowels are worth 3 points",
      scorerFunction: vowelBonusScorer
    },
    {
      name: "Scrabble Scorer",
      description: "Scrabble: Uses scrabble point system",
      scorerFunction: scrabbleScorer
    }
];

function scorerPrompt() {
   console.log("Which Scoring Algorithm would you like to use?:\n");
   for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${i} - ${scoringAlgorithms[i].description}`);
   }
   const userSelection = input.question("Enter 0, 1, or 2: ");
   console.log(`You have selected ${userSelection}`);

   return scoringAlgorithms[userSelection];
}

 transform = (oldPointStructure) => {
 const newPointStructure = {};
 for (let pointValue in oldPointStructure){
  let letterArray = oldPointStructure[pointValue];
   for(let i=0; i<letterArray.length;i++) {
      newPointStructure[letterArray[i].toLowerCase()] = Number(pointValue);
   }
 }
 return newPointStructure;
}
let newPointStructure = transform(oldPointStructure);

function runProgram() {
   const word = initialPrompt();
   const selectedScorer = scorerPrompt();
   const score = selectedScorer.scorerFunction(word, newPointStructure);
   console.log(`Score for '${word}': ${score}`);
}
runProgram();
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
