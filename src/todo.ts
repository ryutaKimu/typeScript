const input = document.getElementById("taskInput") as HTMLInputElement;
const addButton = document.getElementById("addTaskButton") as HTMLButtonElement;
const todoList = document.getElementById("taskList") as HTMLUListElement;

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const addTask = () => {
  const inputText: string = input.value.trim();
  if (inputText === "") return;

  const newTodo: Todo = {
    id: Date.now(),
    text: inputText,
    completed: false,
  };

  saveTodoToLocalStorage(newTodo);

  const newTodoElement: HTMLElement = createTodoItem(newTodo);
  todoList.appendChild(newTodoElement);
  clearInput();
};

const saveTodoToLocalStorage = (todo: Todo) => {
  const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const clearInput = () => (input.value = "");

const completeTodo = (todoItem: HTMLElement, todo: Todo): HTMLButtonElement => {
  const complete: HTMLButtonElement = document.createElement("button");
  complete.textContent = "完了";
  complete.classList.add("complete-btn");

  if (todo.completed) {
    todoItem.classList.add("completed");
  }
  complete.addEventListener("click", () => {
    todoItem.classList.toggle("completed");
    todo.completed = !todo.completed;
    updateTodoInLocalStorage(todo);
  });

  return complete;
};

const updateTodoInLocalStorage = (updatedTodo: Todo) => {
  let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  todos = todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  localStorage.setItem("todos", JSON.stringify(todos));
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
  todoElement: HTMLElement,
  todo: Todo
): HTMLButtonElement => {
  const deleteButton: HTMLButtonElement = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(todoElement);
    removeTodoFromLocalStorage(todo.id);
  });

  return deleteButton;
};

const removeTodoFromLocalStorage = (id: number) => {
  let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  todos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const createTodoItem = (todo: Todo): HTMLElement => {
  const newTodo: HTMLElement = document.createElement("li");
  const completeButton: HTMLButtonElement = completeTodo(newTodo, todo);
  const deleteButton: HTMLButtonElement = makeDeleteButton(
    todoList,
    newTodo,
    todo
  );
  const span: HTMLSpanElement = makeSpan(todo.text);
  const div: HTMLDivElement = makeDiv(completeButton, deleteButton, span);
  newTodo.appendChild(div);
  return newTodo;
};

const makeSpan = (text: string): HTMLSpanElement => {
  const span: HTMLSpanElement = document.createElement("span");
  span.textContent = text;
  return span;
};

const loadTodosFromLocalStorage = () => {
  const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  todos.forEach((todo) => {
    const newTodoElement = createTodoItem(todo);
    todoList.appendChild(newTodoElement);
  });
};
document.addEventListener("DOMContentLoaded", loadTodosFromLocalStorage);
addButton.addEventListener("click", addTask);