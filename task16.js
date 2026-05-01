let mainDiv = document.querySelector("div");

let counter = setInterval(countDown, 1000);

function countDown() {
  mainDiv.innerHTML -= 1;

  if (mainDiv.innerHTML === "5") {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=500, height=500, left=300, top=150",
    );
  }
  if (mainDiv.innerHTML === "0") {
    clearInterval(counter);
  }
}
