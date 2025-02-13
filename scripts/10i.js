
let calculation = JSON.parse(localStorage.getItem('calculation')) || ''
document.querySelector('.js-field').innerHTML = calculation;
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector('.js-field').innerHTML = calculation;
  localStorage.setItem('calculation', JSON.stringify(calculation));
}