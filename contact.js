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