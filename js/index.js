// Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(e) {
  console.log(e);
  // * We have to prevent the default behavior of the button click event, to prevent that we have to call preventDefault() method on the event or e. e.g => e.preventDefault();
  e.preventDefault();
  // * Create a Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  console.log(todoDiv);
  // * Create a List
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  // * Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // * Create Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  console.log(trashButton.classList);
  // * Attach final todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todoList.classList.add("fall");
    todo.remove();
  }
}
