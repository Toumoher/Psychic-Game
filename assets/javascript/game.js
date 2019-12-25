$(function () {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var yourGuesses = 0;

    // code to have the computer guess a random letter
    var computerLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerLetter)

    // Which letter was clicked
    document.onkeyup = function (event) {
        console.log(event.key)
        var userChoice = event.key;

        // game options
        if (userChoice === computerLetter) {
            wins++;
        }
        else {
            guessesLeft--;
            yourGuesses++;
        }
        if (userChoice === 0) {
            losses++
        }

        // console logs results
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById('yourGuesses').innerHTML = "Your Guesses: " + yourGuesses;

    };