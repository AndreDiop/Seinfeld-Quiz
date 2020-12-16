var landingPage = document.getElementById("landing");
var quizPage = document.getElementById("quiz");
var timerPage = document.querySelector("#timer");
var scorePage = document.querySelector("score-container");
var startButton = document.getElementById("startButton");
var answerButtons = document.querySelector("div.buttons");
var questionEl = document.getElementById("question");
var questionIndex = 0;
var questionBank = [
  {
    question: "Commonly used data types DO NOT include...",
    answerChoices: ["a. Strings", "b. Boolean", "c. Alerts", "d. Numbers"],
    correctAnswer: 2,
  },
  {
    question: "A condition in an If/Else statement is enclosed in...",
    answerChoices: [
      "a. Quotations');",
      "b. Curly Braces",
      "c. Parenthesis",
      "d. Square Brackets",
    ],
    correctAnswer: 2,
  },
  {
    question: "Arrays in Javascript can be used to store...",
    answerChoices: [
      "a. Numbers and Strings",
      "b. Other Arrays",
      "c. Booleans",
      "d. All of the above",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "A useful tool used during development and debugging for printing content to the debugger is...",
    answerChoices: [
      "a. Javascript",
      "b. Terminal",
      "c. For Loops",
      "d. Console.log",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables? ",
    answerChoices: [
      "a. Commas",
      "b. Curly Braces",
      "c. Quotations",
      "d. Parenthesis ",
    ],
    correctAnswer: 2,
  },
];


startButton.addEventListener("click", function () {
  // console.log("Clicked");
  landingPage.setAttribute("class", "hide");
  quizPage.setAttribute("class", "");
});
for (var i = 0; i < questionBank.length; i++) {
  //   // 1. Create an element.
  var questions = questionEl;
  //   // 2. Add content
  questions.textContent = questionBank[i];
  //   // 3. Append to an existing element.
  questionEl.append(questions);
  console.log(questions);
}

answerButtons.addEventListener("click", function () {
  var element = event.target;
  if (element.matches("button")) {
    checkAnswer(element.value);
  }
});
