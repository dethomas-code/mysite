// ===== Quiz =====

const questions = [
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
