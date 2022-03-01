const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('your-choice');
const resultsDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = 'Rock';
  }

  if (randomNumber === 2) {
    computerChoice = 'Scissors';
  }

  if (randomNumber === 3) {
    computerChoice = 'Paper';
  }

  computerDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!';
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lost!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you win!';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'you lose!';
  }
  resultsDisplay.innerHTML = result;
}
