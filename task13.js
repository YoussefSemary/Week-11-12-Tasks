function createPopUp() {
  let popUp = document.createElement("div");
  popUp.className = "popup-box";

  popUp.style.cssText = `
  background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 40px 20px;
    width: 400px;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 30%;
    `;
  let title = document.createElement("h2");
  title.textContent = "Welcome";

  let message = document.createElement("p");
  message.textContent = "Welcome to Elzero Web School";

  let closeBtn = document.createElement("span");
  closeBtn.textContent = "x";
  closeBtn.style.cssText = `
  background-color: red;
    color: white;
    width: 25px;
    height: 25px;
    line-height: 22px;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
    font-weight: bold;
    `;

  closeBtn.onclick = function () {
    popUp.remove();
  };

  popUp.appendChild(closeBtn);
  popUp.appendChild(title);
  popUp.appendChild(message);

  document.body.appendChild(popUp);
}

setTimeout(createPopUp, 5000);
