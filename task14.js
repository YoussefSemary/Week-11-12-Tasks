let mainDiv = document.querySelector("div");

let counter = setInterval(countDown, 1000);

function countDown() {
  mainDiv.innerHTML -= 1;
  if (mainDiv.innerHTML === "0") {
    clearInterval(counter);
  }
}
