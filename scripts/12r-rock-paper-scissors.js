// order of code is all over the place, since this project has gone through many iterations, and i wanted to preserve some semblance of order of additions. Added comments for most changes, having the specific instructions at the top.

// 12r - made a copy of rock-paper-scissors game,script and stylesheets, updated script and style file names
// 12s - updated to remove onclick attributes, replaced with addEventListener(click)
// 12t - updated the 'Auto Play' button to change text while it is on.
// 12u - updated autoplay to run if pressing "a" on keyboard
// 12v - updated Reset Score to also be on EventListener('click') rather than an onclick element
// 12w - when clicking 'Reset Score' or pressing Backspace, instead of resetting score immedietly, display a confirmation message below the button, clicking "yes" will reset the score, clicking "no" will not reset the score and hide the message. 

// assigning Confirm and Deny button elements on global scope, and hiding them until later
let resetConfirmElement = document.querySelector('.js-reset-confirm');
let resetDenyElement = document.querySelector('.js-reset-deny');

//assigning score via localStorage, or a default value if no value saved on localStorage
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
//calling an update on Score when the page loads  
updateScoreElement();

//variables used in a later function 
let isAutoPlaying = false;
let intervalId;
let resetOptions = false;

// function to show confirm and deny buttons
showResetOptions = () => {
  resetOptions = true;
  resetConfirmElement.style.visibility='visible';
  resetDenyElement.style.visibility='visible';
}

// function to hide confirm and deny buttons once they're no longer needed
hideResetOptions = ()=>{
  resetConfirmElement.style.visibility='hidden';
  resetDenyElement.style.visibility='hidden';
}
hideResetOptions();

// function to reset score and hide confirm and deny buttons
resetScore = () => {
  resetOptions = false;
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  hideResetOptions();   
}

// function that allows the game to automatically play, one round every second
runAutoPlay = ()=>{
  autoButtonElement = document.querySelector('.auto-play-button');
  if(!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    autoButtonElement.innerHTML = 'Playing!';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoButtonElement.innerHTML = 'Auto Play';
  }
}

// EventListeners for all buttons
document.querySelector('.js-rock-button').addEventListener('click', ()=>{
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', ()=>{
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', ()=>{
  playGame('scissors');
});

document.querySelector('.reset-score-button').addEventListener('click', ()=>{
  showResetOptions();
});

document.querySelector('.js-reset-confirm').addEventListener('click', ()=>{
  resetScore();
});

document.querySelector('.js-reset-deny').addEventListener('click', ()=>{
  hideResetOptions();
});

document.querySelector('.auto-play-button').addEventListener('click', ()=>{
  runAutoPlay();
});

// EventListeners for keypresses
document.body.addEventListener('keydown', (event)=>{
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    runAutoPlay();
  } else if (event.key === 'Backspace') {
    showResetOptions();
  }
});
document.body.addEventListener('keydown', (event)=>{
  if (event.key ==='y') {
    if (resetOptions === true) {
      resetScore();
    }
  } else if (event.key === 'n') {
    if (resetOptions === true){
      hideResetOptions();
    } 
}});

// main function that makes the game work. updates the html and result based on picked move and computer move
function playGame(playerMove){
const computerMove = pickComputerMove();
let result = '';

if (playerMove === 'scissors'){
  if (computerMove === 'rock') {
    result = 'You lose.'
  } else if (computerMove === 'paper') {
    result = 'You win.'
  } else if (computerMove === 'scissors') {
    result = 'Tie.'
  }

} else if (playerMove === 'paper') { 
  if (computerMove === 'rock') {
    result = 'You win.'
  } else if (computerMove === 'paper') {
    result = 'Tie.'
  } else if (computerMove === 'scissors') {
    result = 'You lose.'
  }
  
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.'
  } else if (computerMove === 'paper') {
    result = 'You lose.'
  } else if (computerMove === 'scissors') {
    result = 'You win.'
  }
}

if (result === 'You win.') {
  score.wins += 1;
} else if (result === 'Tie.') {
  score.ties += 1;
} else if (result === 'You lose.'){
  score.losses += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `
  You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`
}

// function that updates the score visible on the page
function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}

// function that determines computer move on random
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}