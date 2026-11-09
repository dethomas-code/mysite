// ===== Εφαρμογή καιρού =====

const cities = [
    { name: "Αθήνα", lat: 37.98, lon: 23.73 },
    { name: "Θεσσαλονίκη", lat: 40.64, lon: 22.94 },
    { name: "Πάτρα", lat: 38.25, lon: 21.73 },
    { name: "Ηράκλειο", lat: 35.34, lon: 25.13 }
];


// Μεταβλητές
const citySelect = document.getElementById("city-select");

// Εμφάνιση
function fillCities() {
    citySelect.innerHTML = "";

    for (let k = 0; k < cities.length; k++) {

        const opt = document.createElement("option");
        opt.textContent = cities[k].name;
        opt.value = k;

        citySelect.appendChild(opt);
    }
}

fillCities();