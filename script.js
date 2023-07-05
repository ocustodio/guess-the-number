'use strict';
const displayNumber = document.querySelector('.number');
const displayScore = document.querySelector('.score');
const userGuess = document.querySelector('.guess');
const documentBody = document.querySelector('body');

let randomNumber;
let score;
let highScore;

function startGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  if (!highScore) highScore = 0;
}

startGame();

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function handleCheck() {
  const numberInput = Number(userGuess.value);

  if (!numberInput) return displayMessage('ENTER A NUMBER');

  if (numberInput === randomNumber) {
    displayMessage('CORRECT NUMBER!');
    displayNumber.textContent = randomNumber;
    documentBody.style.backgroundColor = '#60b347';
    displayNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  if (numberInput !== randomNumber) {
    if (score >= 1) {
      displayMessage(numberInput > randomNumber ? 'Too high' : 'Too low');
      score--;
      displayScore.textContent = score;
    } else {
      displayMessage('You lost!');
      displayScore.textContent = 0;
    }
  }
}

function handlePlayAgain() {
  startGame();

  displayMessage('Start guessing...');

  displayScore.textContent = score;
  displayNumber.textContent = '?';
  userGuess.value = '';
  documentBody.style.backgroundColor = '#222';
  displayNumber.style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', handleCheck);
document.querySelector('.again').addEventListener('click', handlePlayAgain);
