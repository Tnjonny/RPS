const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('your-choice');
const resultsDisplay = document.getElementById('results');
let userChoice;
let computerChoice;
let result;

const possibleChoices = document.querySelectorAll('button');
let user;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener('click', (e) => {
    user = e.target.id;
    userDisplay.innerHTML = user;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);

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
    result = `Draw`;
  }
  if (computerChoice === 'Rock' && user === 'Paper') {
    result = `WOW`;
  }
  if (computerChoice === 'Rock' && user === 'Scissors') {
    result = `Unlucky`;
  }
  if (computerChoice === 'Paper' && user === 'Scissors') {
    result = `WOW`;
  }
  if (computerChoice === 'Paper' && user === 'Rock') {
    result = `Unlucky`;
  }
  if (computerChoice === 'Scissors' && user === 'Rock') {
    result = `WOW`;
  }
  if (computerChoice === 'Scissors' && user === 'Paper') {
    result = `Unlucky`;
  }
  resultsDisplay.innerHTML = result;
}
