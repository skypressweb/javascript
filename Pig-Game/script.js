'use strict';

// Declaring all the relevant variables
const scoreTotal1 = document.querySelector('#score--0');
const scoreTotal2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const player1Style = document.querySelector('.player--0');
const player2Style = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');

// Function for Player 1 title content
const player1Content = function (msg) {
  document.querySelector('#name--0').textContent = msg;
};

let currentScore, activePlayer, playing, totalScores;
// Initializing the game
const init = function () {
  totalScores = [0, 0];
  scoreTotal1.textContent = 0;
  scoreTotal2.textContent = 0;
  dice.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player1Content('Start Playing');
};

init();

// Function to switch players
const switchPlayers = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1Style.classList.toggle('player--active');
  player2Style.classList.toggle('player--active');
};

// Starting the game by clicking the roll dice button
rollDice.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDice);
    // Player 1 starts and dice is revealed
    player1Content('Player 1');
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;

    // dice roll is anything but 1
    if (randomDice != 1) {
      currentScore += randomDice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Dice is a 1 so then switch players
      switchPlayers();
    }
  }
});

// Hold button functionality
holdBtn.addEventListener('click', function () {
  totalScores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    totalScores[activePlayer];
  switchPlayers();
  if (totalScores[activePlayer] >= 20) {
    console.log('hit twenty');
  }
});
