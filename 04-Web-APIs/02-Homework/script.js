var buttonChoices = document.querySelector(".choices");
var startButton = doument.querySelector(".startButton");
var timerEl = document.querySelector(".timer");


function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = secondsLeft + "seconds remaining.";
  
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
      }
    });
  }
  