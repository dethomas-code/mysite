// ===== Χρονομέτρης =====

// Μεταβλητές
let timerSeconds = 0;
const timerId = document.getElementById("timer-display");

// Eμφάνιση
function showTime() {
    const timerMinutes = Math.floor(timerSeconds / 60);
    const timerSeconds = timerSeconds % 60;
    timerSeconds = String(timerSeconds);
    timerSeconds = timerSeconds.padStart(2, "0");
}