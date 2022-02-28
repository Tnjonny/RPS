const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('your-choice');
const resultsDisplay = document.getElementById('results');

const possibleChoices = document.querySelectorAll('button');
let user;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener('click', (e) => {
    user = e.target.id;
    userDisplay.innerHTML = user;
  })
);
