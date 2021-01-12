var eventType = document.querySelector("#event-type"); 
var keyEventsEl = document.querySelector("#key-events");

function keydownAction(event) {
  // TODO: Complete keydown function
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {
      element.textContent += event.key;
    });
  }
});

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

keydownAction.addEventListener("click", function(event)) {
  event.preventDefault();
  elem
}