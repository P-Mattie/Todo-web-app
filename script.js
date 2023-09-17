const addBtn = document.querySelector(".addTodoBtn");
let todoInput = document.querySelector(".todoInput");
let pendingTasks = document.querySelector(".to-do-list");
let doneTasks = document.querySelector(".completed-list");

const appendTodo = function () {
  const liDiv = document.createElement("div");
  let newTodo = document.createElement("li");
  const completedBtn = document.createElement("button");
  newTodo.textContent = todoInput.value;

  newTodo.classList.add("task", "pending-task");
  completedBtn.classList.add("complete-btn");

  // tasks complete/undo button
  completedBtn.addEventListener("click", function (event) {
    if (newTodo.classList.contains("pending-task")) {
      pendingTasks.removeChild(liDiv);
      doneTasks.appendChild(liDiv);
      newTodo.classList.remove("pending-task");
      newTodo.classList.add("completed-task");
    } else if (newTodo.classList.contains("completed-task")) {
      doneTasks.removeChild(liDiv);
      pendingTasks.appendChild(liDiv);
      newTodo.classList.remove("completed-task");
      newTodo.classList.add("pending-task");
    }
  });
  liDiv.appendChild(newTodo);
  liDiv.appendChild(completedBtn);
  pendingTasks.appendChild(liDiv);
};

addBtn.addEventListener("click", function (event) {
  appendTodo();
  todoInput.value = "";
});

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    appendTodo();
    todoInput.value = "";
  }
});
