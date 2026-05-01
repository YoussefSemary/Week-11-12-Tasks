let elements = document.querySelectorAll("section, article, p, span, div");

let filteredElements = Array.from(elements).filter(
  (el) => el.textContent.trim() === "Element",
);

if (filteredElements.length > 0) {
  filteredElements.forEach((el) => {
    el.onclick = function () {
      console.log(`This is element type: ${el.tagName.toLowerCase()}`);
    };
  });
}
