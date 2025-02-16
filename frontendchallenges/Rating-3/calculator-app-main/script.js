// global variables, elements and buttons on top
const displayElement = document.querySelector('.js-display');
const buttonContainer = document.querySelector('.js-button-container');
let calculation = '';
// main calculation function - starts with an empty string, adds each added value into it
function updateDisplay(value){
  calculation+=value;
  displayElement.textContent=calculation;
}
// function for the actual calculation, an eval() inside a try...catch to also display an error if calculation fails for any reason
function equals(){
  try {
    calculation=String(eval(calculation));
    displayElement.textContent = calculation;
  } catch {
    displayElement.textContent='ERROR';
    calculation='';
  }
}
// function to delete the last digit entered
function deleteLast(){
  calculation = calculation.slice(0,-1);
  displayElement.textContent = calculation;
};
// function to reset the calculator AND the calculation variable
function reset(){
  calculation = '';
  displayElement.textContent = '';
}
// Event Delegation for all the buttons and their functionalities
buttonContainer.addEventListener('click',(event)=>{
  const target = event.target;
  if (!target.classList.contains('js-button')) return;
  const value = target.textContent;
  if (target.classList.contains('js-input-button')){
    updateDisplay(value);
  } else if(target.classList.contains('js-equals-button')){
    equals();
  } else if(target.classList.contains('js-del-button')){
    deleteLast();
  } else if(target.classList.contains('js-button-reset')){
    reset();
  }
});
// Radio buttons for the theme selection
document.querySelectorAll('input[name="theme"]').forEach(radio => {
  radio.addEventListener('change',()=>{
    document.body.className = radio.value;
  })
})