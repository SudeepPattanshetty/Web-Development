document.addEventListener("DOMContentLoaded", () => {
  const toDoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const toDoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];
  tasks.forEach((task) => renderTask(task))

  addTaskBtn.addEventListener("click", () => {
    const taskText = toDoInput.value.trim();
    console.log(taskText);
    if (taskText === "") return alert("Please enter an input");

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    toDoInput.value = "";
  });

  function renderTask(task) {
    console.log(task);
  }

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});
