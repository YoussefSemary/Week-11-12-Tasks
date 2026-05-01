let mainDiv = document.querySelector(".our-element");
let desiredParagraph = document.querySelector("p");

desiredParagraph.remove();

let newElement1 = document.createElement("div");
newElement1.className = "start";
newElement1.setAttribute("title", "Start Element");
newElement1.setAttribute("data-value", "Start");
newElement1.textContent = "Start";

let newElement2 = document.createElement("div");
newElement2.className = "end";
newElement2.setAttribute("title", "End Element");
newElement2.setAttribute("data-value", "End");
newElement2.textContent = "End";

mainDiv.addEventListener("click", function () {
  mainDiv.before(newElement1);
  mainDiv.after(newElement2);
});
