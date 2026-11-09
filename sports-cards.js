// ===== Δυναμικές κάρτες =====

const sportsCards = [
  {
    title: "Ποδόσφαιρο",
    text: "Το αγαπημένο μου άθλημα. Παίζω με τους φίλους μου και παρακολουθώ κάθε εβδομάδα τη Liverpool."
  },
  {
    title: "Μπάσκετ",
    text: "Γρήγορο και γεμάτο φάση. Μου αρέσει να παίζω στο γήπεδο της γειτονιάς και να στηρίζω την Ελλάδα."
  },
  {
    title: "Formula 1",
    text: "Ταχύτητα, στρατηγική και ομαδική δουλειά. Δεν χάνω αγώνα και μου αρέσει να προβλέπω τον νικητή."
  },
  {
    title: "Τρέξιμο",
    text: "Με ηρεμεί και με κρατά σε φόρμα. Στόχος μου είναι να βελτιώσω τον χρόνο μου."
  }
];

// Μεταβλητές
const sportsCardGrid = document.getElementById("card-grid");

// Εμφάνιση
function displayCards() {

  sportsCardGrid.innerHTML = "";

  // δείκτες 0..n-1, ταξινομημένοι αλφαβητικά
  const order = sportsCards.map(function (t, i) { return i; });
  order.sort(function (a, b) {
    return sportsCards[a].title.localeCompare(sportsCards[b].title, undefined, { sensitivity: "base" });
  });

  for (let k = 0; k < order.length; k++) {
    const i = order[k];

    const div = document.createElement("div");
    div.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = sportsCards[i].title;

    const para = document.createElement("p");
    para.textContent = sportsCards[i].text;

    div.appendChild(h3);
    div.appendChild(para);

    sportsCardGrid.appendChild(div);
  }
}

// Εκκίνηση
displayCards();