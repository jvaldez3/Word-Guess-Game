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
var wrongGuesses = 10;
var wins = 0;
var underScores = [];
var lettersInChosenWord = [];

var lettersGuessedText = " ";

// Start Game document ready function
function startGame() {
    chosenWord = "";
    lettersGuessed = [];
    wrongGuesses = 10;
    underScores = [];
    lettersInChosenWord = [];
    lettersGuessedText = " ";
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + " ";
    document.getElementById("totalWins").innerHTML = wins;
    document.getElementById("guessesLeft").innerHTML = wrongGuesses;


    // pick a random word
    chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)]
    lettersInChosenWord = chosenWord.split("")

    // display word into underscores
    for (var i = 0; i < chosenWord.length; i++) {
        underScores.push("_");
    }

    document.getElementById("guessWord").innerHTML = underScores.join(" ");



}
document.onkeyup = function () {
    if (event.key.toLowerCase() !== "meta") {

        var userGuess = event.key.toLowerCase();
        var correctGuess = false;
        for (var i = 0; i < lettersGuessed.length; i++) {
            var element = lettersGuessed[i];
            if (element === userGuess) {
                return;
            }

        }
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === userGuess) {
                underScores[i] = userGuess;
                correctGuess = true;
            } else {
                lettersGuessed.push(userGuess);
            }
        }
        document.getElementById("guessWord").innerHTML = underScores.join(" ");
        lettersGuessedText = lettersGuessedText + userGuess;

        document.getElementById("lettersGuessed").innerHTML = lettersGuessedText + " ";

        if (!correctGuess) {
            wrongGuesses--;
            document.getElementById("guessesLeft").innerHTML = wrongGuesses;
            console.log(wrongGuesses);
        } else {
            if (chosenWord === underScores.join('')) {
                wins++;
                document.getElementById("totalWins").innerHTML = wins;
                confirmations('win');
            }
        }

        if (wrongGuesses < 1) {
            confirmations('lose');
        }

    }
}

function confirmations(winOrLose) {
    if (winOrLose === 'lose') {
        setTimeout(() => {
            var restartGame = confirm("Would you like to try again?")
            if (restartGame) {
                startGame();
            }
        }, 100);
    } else {
        setTimeout(() => {
            var winConfirm = confirm("Congratulations, you're a wizard! Would you like to play again?");
            if (winConfirm) {
                startGame();
            }
        }, 100);
    }
}


startGame();