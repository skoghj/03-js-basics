document.addEventListener("DOMContentLoaded", function () {
  //consol log//
  let practice = "Her er en JavaScripts øvelse side 3";
  console.log(practice);

  // Generer et tilfældigt tal mellem 0 og 10
  const secretNumber = Math.floor(Math.random() * 11);
  let numberOfGuesses = 0;

  function guessNumber() {
    const userGuess = document.querySelector("#tal").value;

    if (userGuess === "") {
      console.log("Gæt et tal mellem 0 og 10.");
    } else {
      const guess = parseInt(userGuess);

      if (isNaN(guess) || guess < 0 || guess > 10) {
        alert("Indtast venligst et gyldigt tal mellem 0 og 10.");
      } else {
        numberOfGuesses++;

        if (guess === secretNumber) {
          alert(`Tillykke! Du har gættet rigtigt på ${numberOfGuesses} forsøg.`);
          askForNewGame();
        } else if (guess < secretNumber) {
          alert("Tallet er for lavt. Prøv igen.");
        } else {
          alert("Tallet er for højt. Prøv igen.");
        }
      }
    }
  }

  function askForNewGame() {
    const playAgain = confirm("Vil du spille igen?");
    if (playAgain) {
      // Generer et nyt tilfældigt tal for det nye spil
      numberOfGuesses = 0;
      guessNumber();
    } else {
      alert("Tak for at spille!");
    }
  }

  // Lyt efter klik på gæt-knap
  document.querySelector("#gæt-knap").addEventListener("click", guessNumber);

  // Start det første gæt
  guessNumber();
});
