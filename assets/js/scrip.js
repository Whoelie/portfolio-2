let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("game-area");
let scoreContainer = document.querySelector(".score-area");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
    {
      id: "0",
      question: "Which player has the most Ballon D'ors?",
      options: ["J.Cruyff", "C.Ronaldo", "L.Messi", "Ronaldo"],
      correct: "L.Messi",
    },
    {
      id: "1",
      question: "Which club has won the most Champions Leagues?",
      options: ["AC Milan", "Manchester United", "Barcelona", "Real Madrid"],
      correct: "Real Madrid",
    },
    {
      id: "2",
      question: "Where did the World cup of 2014 take place?",
      options: ["Brazil", "South Africa", "England", "Russia"],
      correct: "Brazil",
    },
  ];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
  });

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
      questionCount += 1;
      if (questionCount == quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML =
          "Your score is " + scoreCount + " out of " + questionCount;
      } else {
        countOfQuestion.innerHTML =
          questionCount + 1 + " of " + quizArray.length + " Question";
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
      }
    })
  );

function quizDisplay(questionCount) {
}

function quizCreator() {

}

function checker(userOption) {

}

function initial() {

}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
  };
