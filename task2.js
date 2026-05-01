let imgSrc = document.body.childNodes[2];
let myImages = document.querySelectorAll("img");

for (let i = 0; i < myImages.length; i++) {
  myImages[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  myImages[i].alt = "Elzero Logo";
}
