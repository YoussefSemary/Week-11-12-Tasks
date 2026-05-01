let mySearch = document.getElementsByTagName("div");

for (let i = 0; i < mySearch.length; i++) {
  if (mySearch[i].classList.contains("one")) {
    mySearch[i].setAttribute("title", "one");
    mySearch[i].textContent = "one";
  } else {
    mySearch[i].setAttribute("title", "Two");
    mySearch[i].textContent = `Two ${mySearch.length}`;
  }
}
