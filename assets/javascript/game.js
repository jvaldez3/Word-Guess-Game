var randomWords = [
    "hermoine",
    "harry",
    "ron",
    "snape",
    "snitch",
    "quidditch",
    "dumbledore",
    "phoenix",
    "potions",
    "basilisk",
    "hogwarts",
    "horcrux",
    "patronus",
    "slytherin",
    "gryffindor",
    "hufflepuff",
    "ravenclaw",
    "sirius"
];
var chosenWord = "";
var lettersGuessed = [];
var totalGuesses = 10;
var wins = 0;
var underScores = [];
var lettersInChosenWord = [];

var lettersGuessedText = " ";

// Start Game document ready function
function startGame() {
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + " ";
    document.getElementById("totalWins").innerHTML = wins;

    // pick a random word
    chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)]
    console.log(chosenWord)
    lettersInChosenWord = chosenWord.split("")

    // display word into underscores
    for (var i = 0; i < chosenWord.length; i++) {
        console.log(i);
        underScores.push("_");
    }
    console.log(underScores)

    document.getElementById("guessWord").innerHTML = underScores.join(" ");
    console.log(randomWords.indexOf(chosenWord));

    document.onkeyup = function () {
        var userGuess = event.key.toLowerCase();
        console.log("User Guess: " + userGuess);
        document.getElementById("guessesLeft").innerHTML = totalGuesses;

        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === userGuess) {
                underScores[i] = userGuess;
            } else {
                lettersGuessed.push(userGuess);
                totalGuesses--;
            }
        }
        document.getElementById("guessWord").innerHTML = underScores.join(" ");

        lettersGuessedText = lettersGuessedText + userGuess;

        document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + " ";

        console.log(chosenWord, underScores, lettersGuessedText)
    }

}
// Fix wrong guesses to only take away 1 guesses left
// when a person guesses the entire word, the game starts over and total wins tracker +1
// if guesses left gets to 0, restart game and prompt "try again"


startGame();