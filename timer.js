// ===== Χρονομέτρης =====

// Μεταβλητές
let timerSeconds = 0;
const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("buttonStart");
const pauseButton = document.getElementById("buttonPause");
const zeroButton = document.getElementById("buttonZero");
let timerId = null;

// Eμφάνιση
function showTime() {
    const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
    const secs = String(timerSeconds % 60).padStart(2, "0");
    timerDisplay.textContent = minutes + ":" + secs;
}

// Έναρξη
startButton.addEventListener("click", function () {
    startButton.disabled = true;
    pauseButton.disabled = false;
    if (timerId === null) {
        const id = setInterval(function () {
            timerSeconds = timerSeconds + 1;
            showTime();
        }, 1000);
        timerId = id;
    }
});

// Σταμάτα
pauseButton.addEventListener("click", function () {
    startButton.disabled = false;
    pauseButton.disabled = true;
    zeroButton.disabled = false;
    clearInterval(timerId);
    timerId = null;
    showTime();
});

// Μηδενισμός
zeroButton.addEventListener("click", function () {
    zeroButton.disabled = true;
    clearInterval(timerId);
    timerId = null;
    timerSeconds = 0;
    showTime();
});

pauseButton.disabled = true;
zeroButton.disabled = true;
showTime();