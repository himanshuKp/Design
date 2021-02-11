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

// game reset functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});

// playing game functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > minimumScore) {
      document.querySelector('.message').textContent = 'Too high';
      score = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      if (score > 0) {
        score = score - 1;
      }
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > minimumScore) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      if (score > 0) {
        score = score - 1;
      }
    }
  }

  document.querySelector('.score').textContent = score;
});
