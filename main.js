var myWordLetters = ["l", "i", "p", "g", "l", "o", "s", "s"]
var guessedLetters = ["_", "_", "_", "l", "i", "p", "g", "o", "s"]

function guessLetter(letter) {
	var goodGuess = false;
	var keepGuessing = false;
	for (var i = 0; i < myWordLetters.length; i ++) {
		if (myWordLetters[i] == letter) {
		guessedLetters [i] = letter;
		goodGuess = true;
		}
		if (guessedLetters [i] == "_") {
			keepGuessing = true;
		}
	}
	if (goodGuess) {
		console.log("Congratulations, you guessed a letter.");
		console.log(guessedLetters.join("_"));
		if (!keepGuessing) {
			alert("You did it!");
		}
	}
	else {
		console.log("Nope, that is incorrect.");
	}
}

guessLetter("a");
guessLetter("o");
guessLetter("e");
guessLetter("l");
guessLetter("i");
guessLetter("g");
guessLetter("m");
guessLetter("p");
guessLetter("t");
guessLetter("s")