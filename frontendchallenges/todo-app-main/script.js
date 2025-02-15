// global variables, elements etc. at top
const addTodo = document.getElementById('add-todo');
const inputAddTodo = document.getElementById('add-todo-input');
const itemsLeftCount = document.getElementById('items-left');
const todoListContainer = document.querySelector('.list-container');
const clearButton = document.querySelector('.remove-completed-button');
const filterButtons = document.querySelectorAll('.filter-button')

// dummy list with initial values, supports adding new values to the end
let todoList = [
  { id: 1, name: "Complete online JavaScript course", completed: false },
  { id: 2, name: "Jog around the park 3x", completed: false },
  { id: 3, name: "10 minutes meditation", completed: false },
  { id: 4, name: "Read for 1 hour", completed: false },
  { id: 5, name: "Pick up groceries", completed: false },
  { id: 6, name: "Complete Todo App on Frontend Mentor", completed: false },
];

// variable to save the currently selected filter for showing different items
let currentFilter = 'all';

function renderTodoList(list){
  const filteredList = list || todoList;
  todoListContainer.innerHTML='';

  filteredList.forEach((todo)=>{
    const html=`
      <div class="todo-list" ${todo.completed ? "completed" : ""} data-todo-id="${todo.id}">
      <input name="completed" class="checkbox" type="checkbox" ${todo.completed ? "checked" : ""}>
        <div class="todo-content">
          <p>${todo.name}</p>
          <button class="delete-button">Delete</button>
        </div>
      </div>
    `;
    todoListContainer.innerHTML+=html;
  });
  updateItemsLeftCounter(filteredList);
}

function addTodoItem(name){
  const newTodo = {
    id: todoList.length + 1,
    name,
    completed: false
  };

  todoList.push(newTodo);
  renderTodoList();
  inputAddTodo.value='';

  setTimeout(()=>{
    addTodo.checked = false;
  }, 200);
}

function filterTodo(filter){
  const todosCopy = [...todoList];
  const todoFiltered = todosCopy.filter((todo)=>filter==='all'
    ? todo
    : filter==='completed'
    ? todo.completed
    : !todo.completed
  );
  currentFilter = filter;
  renderTodoList(todoFiltered);
}

function updateTodo(todoId){
  todoList = todoList.map((todo)=>
    todo.id === todoId
    ? {...todo, completed: !todo.completed}
    : todo);
  filterTodo(currentFilter);
}

function deleteTodo(todoId){
  todoList = todoList.filter((todo)=>todo.id !== todoId);
  filterTodo(currentFilter);
}

function removeCompletedTasks(){
  todoList = todoList.filter((todo)=>!todo.completed);
  filterTodo(currentFilter);
}

function updateItemsLeftCounter(list){
  const remainingItemCount = list.filter((todo)=>!todo.completed).length;
  const label = currentFilter==='all'?'left':currentFilter;

  itemsLeftCount.textContent = `${remainingItemCount} items ${label}`;
}

addTodo.addEventListener('click',(e)=>{
  const name = inputAddTodo.value.trim();
  if(name===''){
    e.preventDefault();
  } else{
    addTodoItem(name);
  }
})

/* initially tried to build this with similar idea as SuperSimpleDev's todolist task, ended up changing my entire approach after multiple failed attempts at various things. Leaving the code commented out at the bottom to leave some trace of the past.

// global variables/elements on top
addButton = document.getElementById('add-todo');
todoDiv = document.getElementById('todo-div');
let object = '';
// dummy list for testing purposes
const todoList = ['beev', 'garenth', 'markymark'];

// renders/updates the list when the page is loaded
renderTodoList();

// main function to update and show the todo list; basic idea copied from an earlier SuperSimpleDev todolist task, basically generating the HTML for the list, adding a div for each item at the end of the list. 
function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach((todoObjective)=>{
    let object = todoObjective;
    const html = `
    <div draggable="true" class="todo-div div-${object}">
    <button class="check-button js-check-button"></button>
    ${object}
    <button class="delete-button js-delete-button">deletebutton</button>
    </div>`;
    todoListHTML += html;
  })
  todoDiv.innerHTML = todoListHTML;

  // delete button for each todo separately, deleted the relevant item it was attached to
  document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
      todoList.splice(index, 1);
      renderTodoList();
    })

  // this never actually worked
  document.querySelectorAll('.js-check-button')
  .forEach((checkButton, index)=>{
    checkButton.addEventListener('click', ()=>{
      checkButton.classList.toggle("marked-complete");
    })
  });
})}

// function to add text from input as a todo onto the list, and then updates the list
function addTodo() {
  inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  todoList.push(name);
  inputElement.value = '';
  renderTodoList();
}
addButton.addEventListener('click', ()=>{
  addTodo();
})

// drag & drop - tried figuring this out, coming back later for it 
function drag(event){
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event){
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
window.addEventListener("DOMContentLoaded",()=>{
  const element = document.getElementById(`objectspan${object}`);
});

*/