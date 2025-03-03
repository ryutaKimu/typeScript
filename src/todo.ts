const input = document.getElementById("taskInput") as HTMLInputElement;
const addButton = document.getElementById("addTaskButton") as HTMLButtonElement;
const todoList = document.getElementById("taskList") as HTMLUListElement;

const addTask = () => {
  const inputText: string = input.value.trim();
  if (inputText === "") return;
  const newTodo: HTMLElement = createTodoItem();
  const completeButton: HTMLButtonElement = completeTodo(newTodo);
  const deleteButton: HTMLButtonElement = makeDeleteButton(todoList, newTodo);
  const span: HTMLSpanElement = makeSpan(inputText);
  const div: HTMLDivElement = makeDiv(completeButton, deleteButton, span);
  newTodo.appendChild(div);
  todoList.appendChild(newTodo);
  clearInput();
};

const clearInput = () => (input.value = "");

const completeTodo = (todoItem: HTMLElement): HTMLButtonElement => {
  const complete: HTMLButtonElement = document.createElement("button");
  complete.textContent = "完了";
  complete.classList.add("complete-btn");
  complete.addEventListener("click", () => {
    todoItem.classList.toggle("completed");
  });

  return complete;
};

const makeDiv = (
  completeButton: HTMLButtonElement,
  deleteButton: HTMLButtonElement,
  span: HTMLSpanElement
): HTMLDivElement => {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("btn-flex");
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  return div;
};

const makeDeleteButton = (
  todoList: HTMLElement,
  todo: HTMLElement
): HTMLButtonElement => {
  const deleteButton: HTMLButtonElement = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(todo);
  });

  return deleteButton;
};

const createTodoItem = (): HTMLElement => {
  const newTodo: HTMLElement = document.createElement("li");
  return newTodo;
};

const makeSpan = (text: string): HTMLSpanElement => {
  const span: HTMLSpanElement = document.createElement("span");
  span.textContent = text;
  return span;
};

addButton.addEventListener("click", addTask);