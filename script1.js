// ===== To-do list =====

let tasks = [];
let filter = "all";

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.getElementById("list");
const clearButton = document.getElementById("resetButton1");
const msgEl = document.getElementById("message");

// Φόρτωση και αποθήκευση
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Εμφάνιση
function displayTasks() {
  todoList.innerHTML = "";

  // δείκτες 0..n-1, ταξινομημένοι αλφαβητικά
  const order = tasks.map(function (t, i) { return i; });
  order.sort(function (a, b) {
    return tasks[a].text.localeCompare(tasks[b].text, undefined, { sensitivity: "base" });
  });

  for (let k = 0; k < order.length; k++) {
    const i = order[k];
    const t = tasks[i];

    if (filter === "active" && t.done) continue;
    if (filter === "done" && !t.done) continue;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = t.done;
    checkbox.classList.add("input-checkbox");
    checkbox.addEventListener("change", function () {
      toggleTask(i);
    });

    const span = document.createElement("span");
    span.textContent = " " + t.text + " ";
    if (t.done) {
      span.style.textDecoration = "line-through";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("deletebutton");
    deleteBtn.addEventListener("click", function () {
      removeTask(i);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

// Ενέργειες
function addTask() {
  const text = todoInput.value.trim();

  if (text === "") {
    msgEl.textContent = "Παρακαλώ γράψε μια εργασία.";
    return;
  }

  msgEl.textContent = "";
  tasks.push({ text: text, done: false });
  todoInput.value = "";
  saveTasks();
  displayTasks();
}

function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;
  saveTasks();
  displayTasks();
}

function clearAll() {
  tasks = [];
  saveTasks();
  displayTasks();
}

// Events
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

clearButton.addEventListener("click", clearAll);

// Εκκίνηση
loadTasks();
displayTasks();
