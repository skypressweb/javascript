'use strict';

/* Game logic - DRY code
1. Secret number needs to be generated and placed in '?' 
2. Make sure there is a number in the field
3. Check button verifies the player number against the secret number
4. If the guess is correct display message, change background colour, widen coloumn, chnage title message
5. If number is too high, change message and reduce score by one 
6. If number is too low, change message and reduce score by one
7. Score must not go below zero
8. Once score hits 0 then game is over, display message, change title message
9. Highscore must be displayed and compared with score on each win to see if higher and if it is, display new highscore
10. Clicking the Again button resets, message, title, background colour, score and clears input field
*/

// SETTING UP THE GAME
//  create a secret number and the scores

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function to Hide/Show the play again button
const playAgain = function (display) {
  document.querySelector('.again').style.display = display;
};

// show the secret number for testing the game
// document.querySelector('.number').textContent = secretNumber;

// Function that shows relevant message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function that displays the background colour
const displayBackground = function (hexvalue) {
  document.querySelector('body').style.backgroundColor = hexvalue;
};

// Function that displays the title
const newTitle = function (title) {
  document.querySelector('#title').textContent = title;
};

// Function to keep and display the High Score
const latestHighscore = function () {};

// Function to display the score
const displayScore = function (newscore) {
  document.querySelector('.score').textContent = newscore;
};

// Hide play again
playAgain('none');

// Player starts guessing
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if there is no input when check button is clicked
  if (!guess) {
    displayMessage('🛑 Please enter a number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 That is correct!');
    newTitle('You Got It! Well Done!');
    displayBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    playAgain('block');
  }

  // If the score is above one - keep playing
  if (score > 1) {
    if (guess != secretNumber) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low.');
      score--;
      displayScore(score);
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    displayMessage('😿 You lost. Try Again?');
    displayScore(0);
    displayBackground('#A83240');
    newTitle('Better Luck Next Time.');
    playAgain('block');
  }
});

// RESET THE GAME
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  displayBackground('#222');
  newTitle('Guess My Number!');
  document.querySelector('.guess').value = '';
  score = 20;
  displayScore(score);
  document.querySelector('.number').style.width = '15rem';
  playAgain('none');
});
