const choreArray = [{
  name: 'make dinner',
  dueDate: '2025-01-23'
 }, {
  name: 'wash dishes',
  dueDate: '2025-01-23'
 }];

renderChoreArray();
function renderChoreArray () {
  let todoListHTML = '';
  choreArray.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-button delete-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-div')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', ()=>{
        choreArray.splice(index, 1);
        renderChoreArray();
      })
    });
}

document.querySelector('.js-button')
  .addEventListener('click', ()=>{
    addChore();
  })
function addChore() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  choreArray.push({
    name,
    dueDate
  });
  console.log(choreArray);

  inputElement.value = '';
  
  renderChoreArray();
  
}