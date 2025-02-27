const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const holes = document.querySelectorAll(".hole");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const audio = new Audio("./audio/whack-easy.mp3");
console.log(difficultyButtons);
let score = 0;

let difficultyLevel = "easy";

let timerDifficulty = {
  easy: {
    interval: 1000,
  },
  medium: {
    interval: 800,
  },
  hard: {
    interval: 600,
  },
};

let setting = timerDifficulty[difficultyLevel];

startButton.addEventListener("click", function (event) {
  score = 0;
  scoreDisplay.textContent = score;
  startButton.disabled = true;
  let gameInterval = setInterval(() => {
    let holeIndex = Math.floor(Math.random() * holes.length);
    holes[holeIndex].classList.add("mole");
    setTimeout(() => {
      holes[holeIndex].classList.remove("mole");
    }, setting.interval);
  }, setting.interval);
  setTimeout(() => {
    clearInterval(gameInterval);
    alert(`Game over! The score is ${score}`);
    startButton.disabled = false;
  }, 30000);
});

holes.forEach((hole) => {
  hole.addEventListener("click", (event) => {
    let holeClicked = event.target;
    if (holeClicked.classList.contains("mole")) {
      audio.play();
      score++;
      scoreDisplay.textContent = score;
    }
  });
});

difficultyButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    difficultyLevel = buttonClicked.dataset.difficulty;
    difficultyButtons.forEach((btn) => btn.classList.remove("active"));
    buttonClicked.classList.add("active");
    setting = timerDifficulty[difficultyLevel];
  });
});
