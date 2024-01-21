'use  strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let initialScore = 20;

const number = document.querySelector('.number');
// number.textContent = secretNumber;
console.log(secretNumber);
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

// on click check event
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
      if (initialScore > 1) {
        // guess > secretNumber
        //   ? (message.textContent = '📈 Too high!')
        //   : (message.textContent = '📉 Too low!');
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
  if (guess > 20) {
    message.textContent = 'Invalid Number';
  }
});

//on click again event

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  number.textContent = '?';
  score.textContent = '20';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing!';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
