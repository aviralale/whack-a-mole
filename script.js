const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const holes = document.querySelectorAll(".hole");
let score = 0;

let timerDifficulty = {
  easy: 1000,
  medium: 500,
  hard: 300,
};

startButton.addEventListener("click", function (event) {
  score = 999;
  scoreDisplay.textContent = score;
  startButton.disabled = true;
  setInterval(() => {
    let holeIndex = Math.floor(Math.random() * holes.length);
    holes[holeIndex].classList.add("mole");
    setTimeout(() => {
      holes[holeIndex].classList.remove("mole");
    }, timerDifficulty.easy * 0.8);
  }, timerDifficulty.easy);
});
