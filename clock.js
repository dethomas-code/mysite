// ===== Clock =====

// Μεταβλητές
const clockBox = document.getElementById("clock");

// Εμφάνιση
function showClock() {
    const now = new Date();
    const date = now.toLocaleDateString("el-GR",{ weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const time = now.toLocaleTimeString("el-GR");
    clockBox.textContent = date + " " + time;  
}

showClock();
setInterval(showClock, 1000);