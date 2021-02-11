'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// state variable
let score = 20;
const minimumScore = 1;
let highscore = 0;

const displaMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateNumberStyle = function (width, value) {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = value;
};

// game reset functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displaMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  updateNumberStyle('15rem', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});

// playing game functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when there is no input
  if (!guess) {
    displaMessage('No number');

    // when player wins
  } else if (guess === secretNumber) {
    displaMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    updateNumberStyle('30rem', secretNumber);
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > minimumScore) {
      displaMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
    } else {
      displaMessage('You lost the game');
      if (score > 0) {
        score--;
      }
    }
  }

  document.querySelector('.score').textContent = score;
});
