'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let initialScore = 20;
let newHighScore = 0;

// elements

let number = document.querySelector('.number');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
// let highscore = document.querySelector('.highscore');

// on check click event

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (guess) {
    if (guess === secretNumber) {
      message.textContent = 'Correct Number';
      number.textContent = secretNumber;
      document.body.style.backgroundColor = '#60b347';
      document.getElementsByClassName('number')[0].style.width = '30rem';
      if (initialScore > highscore) {
        highscore = initialScore;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      message.textContent = guess > secretNumber ? 'Too High' : 'Too low';
      initialScore--;
      score.textContent = initialScore;
    }
  } else {
    message.textContent = 'Invalid Number';
  }
});

// on again click event

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  initialScore = 20;

  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  document.body.backgroundColor = '#222';
  document.getElementsByClassName('number')[0].style.width = '15rem';
});
