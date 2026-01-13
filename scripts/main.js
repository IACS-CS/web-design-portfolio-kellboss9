console.log("main.js loaded successfully!");

const colors = ["red", "blue", "green", "purple", "orange", "pink", "black"];
let index = 0;

function cycleColor() {
  document.body.style.color = colors[index];
  index = (index + 1) % colors.length;
}

/* This code was generated with help from Github Copilot
in response to the prompt "Create a function that toggles text color by adding/removing the text-color-alt class" - 1/13/26 */
function toggleTextColor() {
  document.body.classList.toggle("text-color-alt");
}