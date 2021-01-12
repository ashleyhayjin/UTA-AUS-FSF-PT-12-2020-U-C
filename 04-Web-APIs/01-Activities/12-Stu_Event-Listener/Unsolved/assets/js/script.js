var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  count++; }
decrementEl.addEventListener("click", function())   

// // TODO: Add event listener to decrement button 



// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {
//   // If mode is dark, apply light background
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }