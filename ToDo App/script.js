let inputField = document.querySelector(".input");
let addButton = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let tasksArray = [];

//Checking if there are tasks in localStorage

if (localStorage.getItem("tasks")) {
  tasksArray = JSON.parse(localStorage.getItem("tasks"));
}

fromLocalStorage();

//Adding task

addButton.onclick = () => {
  if (inputField.value !== "") {
    addTaskToArray(inputField.value);
    inputField.value = "";
  }
};

tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    // Removing the elements from localStorage
    deletingTasks(e.target.parentElement.getAttribute("data-id"));
    // Removing the element from the Page
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("task")) {
    // Toggle completion
    toggleStatus(e.target.getAttribute("data-id"));
    // Toggle Done class
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completion: false,
  };

  //push Task to the arrrayof tasks

  tasksArray.push(task);

  //Adding the tasks to the tasksDiv

  addElements(tasksArray);
  //   Adding the tasks to the localStorage

  toLocalStorage(tasksArray);
}

function addElements(tasksArray) {
  // Emptying the tasks tasksDiv
  tasksDiv.innerHTML = "";

  // Looping the array

  tasksArray.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    // Checking if the task is done
    if (task.completion === true) {
      div.className = "task done";
    }

    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    ((span.className = "del"),
      span.appendChild(document.createTextNode("Delete")));
    div.appendChild(span);

    tasksDiv.appendChild(div);
  });
}
const toLocalStorage = (tasksArray) => {
  window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
};

function fromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElements(tasks);
  }
}

function deletingTasks(taskId) {
  // For Explanation
  //   for (let i = 0; i < tasksArray.length; i++) {
  //     console.log(`${tasksArray[i].id} === ${taskId}`);
  //   }

  tasksArray = tasksArray.filter((task) => task.id != taskId);
  toLocalStorage(tasksArray);
}

function toggleStatus(taskId) {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].id == taskId) {
      tasksArray[i].completion == false
        ? (tasksArray[i].completion = true)
        : tasksArray[i].completion == false;
    }
  }
  toLocalStorage(tasksArray);
}
