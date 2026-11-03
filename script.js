// ===== Dark-Light mode =====

const toggleButton = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    toggleButton.textContent = "☀️ Light mode";
  } else {
    document.body.classList.remove("dark");
    toggleButton.textContent = "🌙 Dark mode";
  }
}

// 1. Στη φόρτωση: εφάρμοσε ό,τι είχε αποθηκευτεί
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme);

// 2. Στο πάτημα: άλλαξε θέμα και αποθήκευσέ το
toggleButton.addEventListener("click", function () {
  let newTheme;

  if (document.body.classList.contains("dark")) {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// ===== Επικοινωνία =====

const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name");
const resetName = document.getElementById("resetButton");
const greeting = document.getElementById("greeting");

function showGreeting(name) {
  greeting.textContent = "Γεια σου, " + name + "! 👋";
}

// 1. Στη φόρτωση: αν υπάρχει αποθηκευμένο όνομα, δείξε το
const savedName = localStorage.getItem("userName");
if (savedName) {
  showGreeting(savedName);
}

// 2. Στο submit: έλεγξε, δείξε και αποθήκευσε
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "Παρακαλώ γράψε το όνομά σου.";
  } else {
    showGreeting(name);
    localStorage.setItem("userName", name);
  }

  nameForm.reset();
});

// 3. Πάτημα κουμπιού "Ξέχνα με"
resetName.addEventListener("click", function () {
  localStorage.removeItem("userName");
  greeting.textContent = "";
});

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

