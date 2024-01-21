'use  strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let initialScore = 20;

const number = document.querySelector('.number');

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ No Number!';
  }
  //    else if (guess > secretNumber) {
  //     message.textContent.textContent = '📈 Too high!';
  //     initialScore--;
  //     score.textContent = initialScore;
  //   } else if (guess < secretNumber) {
  //     message.textContent = '📉 Too low!';
  //     initialScore--;
  //     score.textContent = initialScore;
  //   } else if (guess === secretNumber) {
  //     message.textContent = '✔ Correct Number';
  //     document.querySelector('.highscore').textContent = initialScore;
  //   }

  // DRY way
  if (guess === secretNumber) {
    number.textContent = secretNumber;
    message.textContent = '✔ Correct Number';
    highscore.textContent = initialScore;
  } else {
    // guess > secretNumber
    //   ? (message.textContent = '📈 Too high!')
    //   : (message.textContent = '📉 Too low!');
    message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    initialScore--;
    score.textContent = initialScore;
  }
});
