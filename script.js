// var questions = [
//     { q: "Inside which HTML element do we put the JavaScript?", a: "<script>" },
//     { q: " What is the correct syntax for referring to an external script called "xxx.js"?", a: "script.js" },
//     { q: "How do you call a function named "myFunction"?", a: "myfunction()" },

//   ];
//   var quizTimer = 60;

//   // Loop over every question object
//   for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     var answer = confirm(questions[i].q);

//     // Compare answers
//     if ((answer === true && questions[i].a === "t") ||
//       (answer === false && questions[i].a === "f")) {
//       // Increase score
//       score++;
//       alert("Correct!");
//     }
//     else {
//       alert("Wrong!");
//     }
//   }

//   // Show total at end
//   alert("You got " + score + "/" + questions.length);

//   var divSwitcher = document.querySelector("#div-switcher");
//   var container = document.querySelector(".container");
//   var mode = "dark";

//   divSwitcher.addEventListener("click", function() {
//     if (mode === "dark") {
//       mode = "light";
//       container.setAttribute("class", "light");
//     }
//     else {
//       mode = "dark";
//       container.setAttribute("class", "dark");
//     }
//   });

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
