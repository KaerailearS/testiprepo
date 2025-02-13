const choreArray = [{
  name: 'make dinner',
  dueDate: '23-01-2025'
 }, {
  name: 'wash dishes',
  dueDate: '23-01-2025'
 }];

renderChoreArray();
function renderChoreArray () {
  let todoListHTML = '';

  for (let i = 0; i < choreArray.length; i++) {
    const todoObject = choreArray[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="
      choreArray.splice(${i}, 1);
      renderChoreArray();
    ">Delete</button>
    `;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-div')
  .innerHTML = todoListHTML;
}
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