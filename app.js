'use  strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let initialScore = 20;

const number = document.querySelector('.number');
number.textContent = secretNumber;
console.log(secretNumber);
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess) {
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
      //styling
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.style.width = '30rem';
    } else {
      // guess > secretNumber
      //   ? (message.textContent = '📈 Too high!')
      //   : (message.textContent = '📉 Too low!');
      // message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      // initialScore--;
      // score.textContent = initialScore;
      if (initialScore > 1) {
        message.textContent =
          guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        initialScore--;
        score.textContent = initialScore;
      } else {
        message.textContent = '💥 Game lost!';
        score.textContent = 0;
      }
    }
  } else {
    message.textContent = '⛔ No Number!';
  }
});

// again

document.querySelector('.again').addEventListener('click', () => {
  number.textContent = '?';
  score.textContent = '0';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing!';
  highscore.textContent = initialScore;
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  //   if (initialScore === 0) {
  //     highscore = 0;
  //   } else {
  //     highscore.textContent = initialScore;
  //   }
});
