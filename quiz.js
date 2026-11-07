// ===== Quiz =====

const questions = [
  {
    question: "Πόσους παίκτες έχει μία ομάδα ποδοσφαίρου μέσα στο γήπεδο;",
    options: ["9", "10", "11", "12"],
    answer: 2
  },
  {
    question: "Σε ποια χώρα διοργανώθηκαν οι πρώτοι σύγχρονοι Ολυμπιακοί Αγώνες το 1896;",
    options: ["Γαλλία", "Ελλάδα", "Αγγλία", "Ιταλία"],
    answer: 1
  },
  {
    question: "Πόσους πόντους αξίζει ένα τρίποντο στο μπάσκετ;",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "Σε ποιο άθλημα χρησιμοποιείται ρακέτα και φτερωτή μπαλίτα;",
    options: ["Badminton", "Τένις", "Πινγκ πονγκ", "Σκουός"],
    answer: 0
  },
  {
    question: "Ποια ομάδα της Premier League έχει το σύνθημα «You'll Never Walk Alone»;",
    options: ["Chelsea", "Arsenal", "Liverpool", "Everton"],
    answer: 2
  },
  {
    question: "Πόσοι παίκτες της ίδιας ομάδας βρίσκονται μαζί στο παρκέ σε αγώνα μπάσκετ;",
    options: ["4", "5", "6", "7"],
    answer: 1
  },
  {
    question: "Πόσα λεπτά διαρκεί ένας κανονικός αγώνας ποδοσφαίρου, χωρίς καθυστερήσεις;",
    options: ["80", "85", "90", "100"],
    answer: 2
  },
  {
    question: "Ποια χώρα κέρδισε το Ευρωπαϊκό Πρωτάθλημα ποδοσφαίρου το 2004;",
    options: ["Ελλάδα", "Πορτογαλία", "Ισπανία", "Γερμανία"],
    answer: 0
  },
  {
    question: "Σε ποιο άθλημα γίνεται «pit stop»;",
    options: ["Τένις", "Βόλεϊ", "Formula 1", "Κολύμβηση"],
    answer: 2
  },
  {
    question: "Πόσα χιλιόμετρα είναι περίπου ο κλασικός Μαραθώνιος;",
    options: ["21", "32", "42", "50"],
    answer: 2
  }
];

// Μεταβλητές
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizMessage = document.getElementById("quiz-message");
const quizTimer = document.getElementById("quiz-timer");
const nextButton = document.getElementById("nextButton");
const beginButton = document.getElementById("beginButton");
const quizScore = document.getElementById("quiz-score");
const quizBest = document.getElementById("quiz-best");

// Εμφάνιση
let currentQuestion = 0;
let score = 0;
const QUESTION_TIME = 15;
let quizTimerId = null;
let quizTime = 0;

function showQuestion() {
  beginButton.hidden = true;
  const q = questions[currentQuestion];
  quizTime = QUESTION_TIME;
  quizTimer.classList.remove("low-time");
  quizQuestion.textContent = q.question;
  nextButton.disabled = true;

  quizOptions.innerHTML = "";
  quizMessage.textContent = "";

  for (let k = 0; k < q.options.length; k++) {
    const optionText = q.options[k];

    const quizAnswer = document.createElement("button");
    quizAnswer.type = "button";
    quizAnswer.textContent = optionText;
    quizAnswer.classList.add("button");
    quizAnswer.addEventListener("click", function () {
      checkAnswer(k);
    });
    
    quizOptions.appendChild(quizAnswer);
  }
  quizTimer.textContent = "⏳ " + quizTime;
  clearInterval(quizTimerId);
  const quizIdTimer  = setInterval(function () {
    quizTime = quizTime - 1;
    quizTimer.textContent = "⏳ " + quizTime;
    if (quizTime <= 5 && quizTime >= 1) {
      quizTimer.classList.add("low-time");
    } else if (quizTime === 0) {
      checkAnswer(-1);
    }
  }, 1000);
  quizTimerId = quizIdTimer;
  quizScore.textContent = "Σκορ: " + score;
}

// Τσεκ της απάντησης
function checkAnswer(selected) {
  const q = questions[currentQuestion];
  clearInterval(quizTimerId);
  quizTimerId = null;
  const buttons = quizOptions.querySelectorAll("button");
  if (selected === q.answer) {
    quizMessage.textContent = "🎉 Μπράβο!";
    buttons[selected].classList.add("correct");
    score = score + 1;
  } else {
    if (selected !== -1) {
      quizMessage.textContent = "Λάθος απάντηση. Η σωστή απάντηση είναι η " + q.options[q.answer] + ".";
      buttons[selected].classList.add("wrong");
    } else {
      quizMessage.textContent = "Λάθος απάντηση. Η σωστή απάντηση είναι η " + q.options[q.answer] + ".";
    }
    buttons[q.answer].classList.add("correct");
  }
  quizScore.textContent = "Σκορ: " + score;
  for (let k = 0; k < buttons.length; k++) {
    buttons[k].disabled = true;
  }
  nextButton.disabled = false;
}

// Κουμπί επόμενης ερώτησης
nextButton.addEventListener("click", function () {
  currentQuestion = currentQuestion + 1;
  if (currentQuestion === questions.length) {
    quizQuestion.textContent = "Τέλος! Το σκορ σου: " + score + " από " + questions.length + ".";
    clearInterval(quizTimerId);
    quizTimerId = null;
    quizTimer.textContent = "";
    updateQuizBest(score);
    nextButton.textContent = "Παίξε ξανά";
    quizOptions.innerHTML = "";
    quizMessage.textContent = "";
  } else if (currentQuestion === questions.length + 1) {
    quizQuestion.textContent = "";
    currentQuestion = 0;
    score = 0;
    nextButton.textContent = "Επόμενο";
    randomQuestions();
    showQuestion();
  } else {
      showQuestion();
  }
});

// Μεγαλύτερο σκορ
function showQuizBest() {
  const best = localStorage.getItem("quizBest");
  if (best !== null) {
    quizBest.textContent = "🏆 Καλύτερο σκορ: " + best + "!";
  }
}

function updateQuizBest(currentScore) {
  const saved = localStorage.getItem("quizBest");

  if (saved === null || currentScore > Number(saved)) {
    localStorage.setItem("quizBest", currentScore);
    showQuizBest();
  }
}

// Τυχαία σειρά
function randomQuestions() {
  for (let i = questions.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
}

//Έναρξη
beginButton.addEventListener("click", function () {
  randomQuestions();
  showQuestion();
  showQuizBest();
});

showQuizBest();