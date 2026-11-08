// ===== Μάντεψε τον αριθμό =====

const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess");
const tryIt = document.getElementById("tryIt");
const gameMessage = document.getElementById("game-message");
const attemptsText = document.getElementById("attempts");
const newGame = document.getElementById("newGame");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const guess = Number(guessInput.value);
  attempts = attempts + 1;

  if (guess === secretNumber) {
    gameMessage.textContent = "🎉 Μπράβο! Ο αριθμός ήταν " + secretNumber + ".";
    updateBestScore(attempts);
    guessInput.disabled = true;
    tryIt.disabled = true;
    newGame.classList.add("highlight");
  } else if (guess < secretNumber) {
    gameMessage.textContent = "⬆️ Πιο ψηλά!";
  } else {
    gameMessage.textContent = "⬇️ Πιο χαμηλά!";
  }

  attemptsText.textContent = "Προσπάθειες: " + attempts;
  guessForm.reset();
});

newGame.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.disabled = false;
  tryIt.disabled = false;
  newGame.classList.remove("highlight");
  guessInput.focus();
  gameMessage.textContent = "";
  attemptsText.textContent = "Προσπάθειες: " + attempts;
});

const bestScoreText = document.getElementById("best-score");

function showBestScore() {
  const best = localStorage.getItem("bestScore");
  if (best !== null) {
    bestScoreText.textContent = "🏆 Καλύτερο σκορ: " + best + " προσπάθειες";
  }
}

function updateBestScore(currentAttempts) {
  const saved = localStorage.getItem("bestScore");

  if (saved === null || currentAttempts < Number(saved)) {
    localStorage.setItem("bestScore", currentAttempts);
    showBestScore();
  }
}

// Στη φόρτωση της σελίδας
showBestScore();