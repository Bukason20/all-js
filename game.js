const firstUserChoice = document.querySelector(
  ".my-choices > div:nth-child(1)",
);
const secondUserChoice = document.querySelector(
  ".my-choices > div:nth-child(2)",
);
const thirdUserChoice = document.querySelector(
  ".my-choices > div:nth-child(3)",
);
const userChoiceOutput = document.querySelector("#user-choice");
const computerChoiceOutput = document.querySelector("#computer-choice");
let userScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];
let myChoice;

function computerChoice() {
  let randomChoice = Math.floor(Math.random() * choices.length);

  console.log(choices[randomChoice]);

  computerChoiceOutput.innerHTML = choices[randomChoice];

  //   return choices[randomChoice];
}
// computerChoice();

firstUserChoice.addEventListener("click", function () {
  console.log("Rock was clicked");
  myChoice = choices[0];
  userChoiceOutput.innerHTML = myChoice;

  computerChoice();
  getWinner();
});

secondUserChoice.addEventListener("click", function () {
  console.log("Paper was clicked");
  myChoice = choices[1];
  userChoiceOutput.innerHTML = myChoice;

  computerChoice();
});

thirdUserChoice.addEventListener("click", function () {
  console.log("Scissors was clicked");
  myChoice = choices[2];
  userChoiceOutput.innerHTML = myChoice;

  computerChoice();
});

function getWinner() {
  if (
    (userChoiceOutput === "Rock" && computerChoiceOutput === "Scissors") ||
    (userChoiceOutput === "Paper" && computerChoiceOutput === "Rock") ||
    (userChoiceOutput === choices[2] && computerChoiceOutput === choices[1])
  ) {
    console.log("User wins");
  }

  console.log("hello world");
}
