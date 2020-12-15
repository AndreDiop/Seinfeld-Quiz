
var landingPage = document.getElementById("landing");
var quizPage = document.getElementById("quiz");
var timerPage = document.querySelector("#timer container");
var scorePage = document.querySelector("score-container");
var startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  // console.log("Clicked");
  landingPage.setAttribute("class", "hide");
  quizPage.setAttribute("class", "");
});
