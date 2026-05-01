let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let classesDisplay = document.querySelector(".classes-list div");

function updateClasses() {
  classesDisplay.innerHTML = "";

  if (currentElement.classList.length === 0) {
    classesDisplay.innerHTML = "No Classes To Show";
  } else {
    let classesArray = Array.from(currentElement.classList).sort();

    classesArray.forEach((cls) => {
      let span = document.createElement("span");
      span.textContent = cls;
      classesDisplay.appendChild(span);
    });
  }
}

updateClasses();

addInput.addEventListener("blur", function () {
  let inputValue = this.value.trim().toLowerCase();

  if (inputValue !== "") {
    let classesToAdd = inputValue.split(" ");

    classesToAdd.forEach((cls) => {
      if (cls !== "") {
        currentElement.classList.add(cls);
      }
    });
  }

  this.value = "";
  updateClasses();
});

removeInput.addEventListener("blur", function () {
  let inputValue = this.value.trim().toLowerCase();

  if (inputValue !== "") {
    let classesToRemove = inputValue.split(" ");

    classesToRemove.forEach((cls) => {
      if (cls !== "") {
        currentElement.classList.remove(cls);
      }
    });
  }

  this.value = "";
  updateClasses();
});
