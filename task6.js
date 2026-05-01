let form = document.querySelector("form");
let elementsNum = document.querySelector("[name='elements']");
let elementsText = document.querySelector("[name='texts']");
let elementType = document.querySelector("[name='type']");
let results = document.querySelector(".results");
form.onsubmit = function (e) {
  e.preventDefault();
  results.innerHTML = "";
  let count = parseInt(elementsNum.value);
  for (let i = 1; i <= count; i++) {
    let el = document.createElement(elementType.value.toLowerCase());
    el.className = "box";
    el.title = "Element";
    el.id = `id-${i}`;
    el.textContent = elementsText.value;

    results.appendChild(el);
  }
};
