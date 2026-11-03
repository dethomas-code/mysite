// ===== To-do Cards =====

let userCards = [];

const todoCards = document.getElementById("todo-cards");
const todoCardsTitle = document.getElementById("todocards");
const todoCardsText = document.getElementById("todocards2");
const userCardGrid = document.getElementById("user-card-grid");
const msgCard = document.getElementById("cardsMessage");

// Φόρτωση και αποθήκευση
function loadCards() {
  const savedCards = localStorage.getItem("userCards");
  if (savedCards !== null) {
    userCards = JSON.parse(savedCards);
  }
}

function saveCards() {
  localStorage.setItem("userCards", JSON.stringify(userCards));
}

// Εμφάνιση
function displayUserCards() {
  userCardGrid.innerHTML = "";

  // δείκτες 0..n-1, ταξινομημένοι αλφαβητικά
  const orderCards = userCards.map(function (t, i) { return i; });
  orderCards.sort(function (a, b) {
    return userCards[a].title.localeCompare(userCards[b].title, undefined, { sensitivity: "base" });
  });

  for (let k = 0; k < orderCards.length; k++) {
    const i = orderCards[k];

    const userDiv = document.createElement("div");
    userDiv.classList.add("card");

    const userH3 = document.createElement("h3");
    userH3.textContent = userCards[i].title;

    const userPara = document.createElement("p");
    userPara.textContent = userCards[i].text;

    const deleteCardsBtn = document.createElement("button");
    deleteCardsBtn.type = "button";
    deleteCardsBtn.textContent = "x";
    deleteCardsBtn.classList.add("deletebutton");
    deleteCardsBtn.addEventListener("click", function () {
      removeCards(i);
    });

    userDiv.appendChild(userH3);
    userDiv.appendChild(userPara);
    userDiv.appendChild(deleteCardsBtn);

    userCardGrid.appendChild(userDiv);
  }
}

// Ενέργειες
function addCards() {
  const userText = todoCardsTitle.value.trim();
  const userText2 = todoCardsText.value.trim();

  if (userText === "" || userText2 === "") {
    msgCard.textContent = "Παρακαλώ γράψε μια κάρτα.";
    return;
  }

  msgCard.textContent = "";
  userCards.push({ title: userText, text: userText2});
  todoCardsTitle.value = "";
  todoCardsText.value = "";
  saveCards();
  displayUserCards();
}

function removeCards(i) {
  userCards.splice(i, 1);
  saveCards();
  displayUserCards();
}

// Events
todoCards.addEventListener("submit", function (event) {
  event.preventDefault();
  addCards();
});

// Εκκίνηση
loadCards();
displayUserCards();
