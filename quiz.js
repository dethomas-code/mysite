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

const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizMessage = document.getElementById("quiz-message");
const nextButton = document.getElementById("nextButton");
const quizScore = document.getElementById("quiz-score");

// Εμφάνιση
let currentQuestion = 0;
let score = 0;

function showQuestion() {

  const q = questions[currentQuestion];
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
  quizScore.textContent = "Σκορ: " + score;
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  const buttons = quizOptions.querySelectorAll("button");
  if (selected === q.answer) {
    quizMessage.textContent = "🎉 Μπράβο!";
    buttons[selected].classList.add("correct");
    score = score + 1;
  } else {
    quizMessage.textContent = "Λάθος απάντηση. Η σωστή απάντηση είναι η " + q.options[q.answer] + ".";
    buttons[selected].classList.add("wrong");
    buttons[q.answer].classList.add("correct");
  }
  quizScore.textContent = "Σκορ: " + score;
  for (let k = 0; k < buttons.length; k++) {
    buttons[k].disabled = true;
  }
  nextButton.disabled = false;
}

nextButton.addEventListener("click", function () {
  currentQuestion = currentQuestion + 1;
  if (currentQuestion === questions.length) {
    quizQuestion.textContent = "Τέλος! Το σκορ σου: " + score + " από " + questions.length + ".";
    nextButton.textContent = "Παίξε ξανά";
    quizOptions.innerHTML = "";
    quizMessage.textContent = "";
  } else if (currentQuestion === questions.length + 1) {
    quizQuestion.textContent = "";
    currentQuestion = 0;
    score = 0;
    nextButton.textContent = "Επόμενο";
    showQuestion();
  } else {
      showQuestion();
  }
});

showQuestion();