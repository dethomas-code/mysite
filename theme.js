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