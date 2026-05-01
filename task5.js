let myImages = document.querySelectorAll("img");
for (let i = 0; i < myImages.length; i++) {
  if (myImages[i].hasAttribute("alt")) {
    myImages[i].setAttribute("alt", "Old");
  } else {
    myImages[i].setAttribute("alt", "Elzero New");
  }
}
