let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let wrongAttempts = 0;

const maxAttempts = 6;

// Hangman images
const hangmanImages = [
  "images/0.jpg",
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg"
];

// Sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const gameOverSound = new Audio("sounds/gameover.mp3");

// Elements
const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptText = document.getElementById("attempts");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");

const hangmanImg = document.getElementById("hangmanImg");
const hangmanText = document.getElementById("hangmanText");

guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

function checkGuess() {
  const guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⚠ Enter a valid number (1–100)";
    message.style.color = "orange";
    return;
  }

  attempts++;
  attemptText.textContent = `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    correctSound.play();
    message.textContent = "🎉 Correct! You won!";
    message.style.color = "green";
    endGame();
    return;
  }

  // WRONG GUESS → HANGMAN UPDATE
  wrongSound.play();
  wrongAttempts++;
  hangmanImg.src = hangmanImages[wrongAttempts];
  hangmanText.textContent = `Wrong Attempts: ${wrongAttempts} / ${maxAttempts}`;

  if (guess > randomNumber) {
    message.textContent = "⬇ Try a smaller number";
  } else {
    message.textContent = "⬆ Try a bigger number";
  }

  message.style.color = "orange";

  if (wrongAttempts === maxAttempts) {
    gameOverSound.play();
    message.textContent = `☠ Game Over! Number was ${randomNumber}`;
    message.style.color = "red";
    endGame();
  }

  input.value = "";
}

function endGame() {
  input.disabled = true;
  guessBtn.disabled = true;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  wrongAttempts = 0;

  input.disabled = false;
  guessBtn.disabled = false;
  input.value = "";

  message.textContent = "";
  attemptText.textContent = "";
  hangmanText.textContent = "Wrong Attempts: 0 / 6";
  hangmanImg.src = hangmanImages[0];
}
