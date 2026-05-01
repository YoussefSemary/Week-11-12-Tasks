let promptMsg = prompt("Enter a number from - to", "Example 5 - 20");
console.log(promptMsg);

let numbers = promptMsg.split(" - ").map(Number);

let start = Math.min(numbers[0], numbers[1]);
let end = Math.max(numbers[0], numbers[1]);

if (!isNaN(start) && !isNaN(end)) {
  for (let i = start; i <= end; i++) {
    let numDiv = document.createElement("div");
    numDiv.textContent = i;
    document.body.appendChild(numDiv);
  }
} else {
  console.log("Please enter the numbers in the right formula 5 - 20");
}
