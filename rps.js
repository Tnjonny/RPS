const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('your-choice');
const resultsDisplay = document.getElementById('results');
let userChoice;
let computerChoice;

const possibleChoices = document.querySelectorAll('button');
let user;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener('click', (e) => {
    user = e.target.id;
    userDisplay.innerHTML = user;
    generateComputerChoice();
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
