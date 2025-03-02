const input = document.getElementById("taskInput") as HTMLInputElement;
const addButton = document.getElementById("addTaskButton") as HTMLButtonElement;
const todoList = document.getElementById("taskList") as HTMLUListElement;

const addTask = ()=>{
  const inputText: string = input.value.trim();
  if (inputText === "") return;
  todoList.appendChild(createTodoItem(inputText));
  clearInput();
}

const clearInput = ()=> input.value = "";

const createTodoItem = (text:string):HTMLElement =>{
  const newTodo: HTMLElement = document.createElement("li");
  newTodo.textContent = text;
  return newTodo;
}

addButton.addEventListener("click", addTask);