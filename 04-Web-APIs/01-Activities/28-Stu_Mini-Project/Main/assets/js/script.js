//javascript code goes here

//Start Button
document.getElementById("start-button").addEventListener("click", startGame);

//timer for the game

var timerEl = document.querySelector(".timer-count");
var timerEl = document.querySelector(".win");
var timerEl = document.querySelector(".lose");
var timerEl = document.querySelector(".word-blanks");

//variables to start the game

var secondsLeft = 10;
var hiddenWord = "Javascript";
var wins = 0;
var losses = 0;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + "seconds remaining.";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }
  });
}

function startGame() {
  var userWord = "hi";
  var alreadyInput = document.getElementsByClassName("word-blanks").innerText;
  console.log(userWord);
  console.log(alreadyInput);
  // if() {

  // }
}
