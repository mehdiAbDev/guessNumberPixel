'use strict';
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButton = document.querySelector('#credits-button');
const theCredits = document.querySelector('.modalpara');
let theNumber = document.getElementById('number');
let theScore = document.getElementById('score');
theScore.textContent = 20;
let checkButton = document.getElementById('check-btn');
let againButton = document.getElementById('again-btn');
let theMessage = document.getElementById('the-message');
let theHighScore = document.getElementById('highscore');
let highscore = 0;
let score = 20;
let theSecretNumber = Math.trunc(Math.random() * 20) + 1;

const randomly = function () {
  theSecretNumber = Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (element, message) {
  element.textContent = message;
};

const resetGame = function () {
  score = 20;
  document.body.style.backgroundColor = '#111';
  theScore.textContent = score;
  theMessage.textContent = 'Start Guessing...';
  randomly();
  theNumber.textContent = '?';
  theNumber.style.width = '4em';
};

const checkTheNumber = function () {
  const theGuess = Number(document.getElementById('guess').value);
  if (!theGuess) {
    displayMessage(theMessage, '⛔ No number');
    document.body.style.backgroundColor = 'red';
  } else if (theGuess === theSecretNumber) {
    if (score > highscore) highscore = score;
    theHighScore.textContent = highscore;
    displayMessage(theMessage, '😎 Correct!');
    document.body.style.backgroundColor = 'green';
    displayMessage(theNumber, theSecretNumber);
    theNumber.style.width = '8em';
  } else if (theGuess !== theSecretNumber) {
    if (score > 1) {
      document.body.style.backgroundColor = '#111';
      score--;
      theScore.textContent = score;
      displayMessage(theMessage, theGuess > theSecretNumber ? '🔽Go down' : '🔼 Go up');
    } else {
      displayMessage(theMessage, '👎 You lost the game');
      document.body.style.backgroundColor = 'red';
      theScore.textContent = 0;
    }
  }
};

const showModal = function (modal) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (modal) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalButton.addEventListener('click', function () {
  closeModal(theCredits);
});

openModalButton.addEventListener('click', function () {
  showModal(theCredits);
});

overlay.addEventListener('click', function () {
  closeModal(theCredits);
});

checkButton.addEventListener('click', function () {
  checkTheNumber();
});

againButton.addEventListener('click', function () {
  resetGame();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'r') resetGame();
  else if (event.key === 'Enter') checkTheNumber();
  else if (event.key === 'Escape') closeModal(theCredits);
});
