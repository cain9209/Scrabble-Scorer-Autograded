if (userSelection === 0)
{
console.log("simpleScorer: "), (scoringAlgorithms[0].name)
console.log("scoringFunction result: "), (scoringAlgorithms[0].scoringFunction())
} 
else if (userSelection === 1)
{
console.log("Bonous Vowels: "), (scoringAlgorithms[1].name)
console.log("scoringFunction result:"), (scoringAlgorithms[1].scoringFunction())
}
else if (userSelection ===2)
{
console.log("Scrabble Scorer: "), (scoringAlgorithms[2].name)
console.log("scoringFunction result:"), (scoringAlgorithms[2].scoringFunction())
}
return scorerPrompt;
}
