'use strict';

// Storing relevant elements in variables

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const player1Score = document.querySelector('#current--0');
const player2Score = document.querySelector('#current--1');
const player1Style = document.querySelector('.player--0');
const player2Style = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// Clearing the scores and hiding dice
score1.textContent = 0;
score2.textContent = 0;

dice.classList.add('hidden');

const init = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  dice.classList.add('hidden');
};

// Functionality for switching players
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Style.classList.toggle('player--active');
  player2Style.classList.toggle('player--active');
};

// Starting the game
const scoreTotal = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

rollDice.addEventListener('click', function () {
  if (playing) {
    // Rolling the dice
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDice);

    // Displaying the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;

    // Functionality if a number 2-6 is rolled
    if (randomDice != 1) {
      // add dice value to current score
      currentScore += randomDice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player when a 1 is rolled
      switchPlayer();
    }
  }
});

// Accumulating points with the hold button
holdBtn.addEventListener('click', function () {
  if (playing) {
    scoreTotal[activePlayer] += currentScore;
    // display the updated score by player
    document.querySelector(`#score--${activePlayer}`).textContent =
      scoreTotal[activePlayer];

    // Check if a player's score is 100+
    if (scoreTotal[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`#name--${activePlayer}`).textContent = 'WINNER!';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      // Switch players
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', function () {
  init();
});
